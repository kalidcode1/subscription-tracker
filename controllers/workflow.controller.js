import { createRequire } from 'module';
import dayjs from 'dayjs';
import Subscription from '../models/subscription.model.js';
import { sendReminderEmail } from '../utils/send-emails.js';

const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

// Use "reminders" with an 'e', not 'remainder'
const REMINDERS = [7, 3, 1]; 

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    // Stop if subscription doesn't exist or isn't active
    if (!subscription || subscription.status !== 'active') {
        console.log(`Subscription ${subscriptionId} is not active or not found. Stopping.`);
        return;
    }

    const renewalDate = dayjs(subscription.renewalDate);

    // Stop if renewal date has already passed
    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        // Only trigger if the reminder date is in the future
        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, `reminder ${daysBefore} days before`, reminderDate);
            // Trigger ONLY after sleeping until the date
            await triggerReminder(context, `reminder ${daysBefore} days before`);
        } else {
            console.log(`Skipping ${daysBefore}-day reminder because the date has already passed.`);
        }
    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () => {
        
        return Subscription.findById(subscriptionId).populate('user', 'name email').lean();
    });
};

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label) => {
    return await context.run(label, async () => {
        console.log(`Triggering ${label} reminder`);

        await sendReminderEmail({
            to:subscription.user.email,
            type: reminder.label.subscription,
            subscription: subscription
        })
      
    });
};