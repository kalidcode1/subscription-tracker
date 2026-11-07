import { emailTemplates } from './email-templates.js';
import transporter, { accountEmail } from '../config/nodemailer.js';
import dayjs from 'dayjs';


export const sendReminderEmail = async ({ to, type, subscription }) => {
    if(!to || !type) {throw new Error('Missing required parameters: to and type are required')};

 const template = emailTemplates.find((t) => t.label === type);
 if(!template) {throw new Error(`Email template not found`)};

 const mailInfo = {
    userName: subscription.user.name,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format('MMMM D, YYYY'),
    planName: subscription.name,
    price:`${subscription.currency} ${subscription.price} ${subscription.frequency}`,
    paymentMethod: subscription.paymentMethod,
 }

 const message = template.generateBody(mailInfo);

 const subject = template.generateSubject(mailInfo);

 const mailoptions = {
    from: accountEmail,
    to: to,
    subject: subject,
    html: message,
 }


 return transporter.sendMail(mailoptions, (error, info) => { 
    if(error){console.log(error, 'error sending email')}
    else{
        console.log(`Email sent: ${info.response} `)
    }
 })
} 