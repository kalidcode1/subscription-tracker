import Subscription from '../models/subscription.model.js'
import {workflowClient} from '../config/upstash.js'
import {SERVER_URL} from '../config/env.js'

export const createSubscription = async (req, res, next) => {
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id
        });

        await workflowClient.trigger({
          url: `${SERVER_URL}/api/v1/workflows/subscriptions/reminders`,
          body: { subscriptionId: subscription.id },
          headers: {
           'Content-Type': 'application/json',
          },
        })

        res.status(201).json({
            success: true,
            data: subscription
        })
    }
    catch (error) {
        next(error)
    }
}

export const getUserSubscriptions = async (req, res, next) => {
  try {
    console.log('=== OWNERSHIP CHECK ===');
    console.log('req.user._id :', req.user._id.toString());
    console.log('req.params.id:', req.params.id);
    console.log('equal?       :', req.user._id.toString() === req.params.id);
    console.log('=======================');
    
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error('you are not the owner of this account');
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};