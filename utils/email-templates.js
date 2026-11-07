export const emailTemplates = [
  {
    label: 'reminder 7 days before',
    generateSubject: (data) => `Upcoming Renewal: ${data.subscriptionName} renews in 7 days`,
    generateBody: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333;">Hello ${data.userName},</h2>
        <p style="color: #555; font-size: 16px;">This is a friendly reminder that your subscription for <strong>${data.subscriptionName}</strong> will renew in <strong>7 days</strong>.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Subscription Details:</h3>
          <ul style="list-style-type: none; padding: 0; color: #555;">
            <li style="margin-bottom: 8px;"><strong>Plan:</strong> ${data.planName}</li>
            <li style="margin-bottom: 8px;"><strong>Price:</strong> ${data.price}</li>
            <li style="margin-bottom: 8px;"><strong>Renewal Date:</strong> ${data.renewalDate}</li>
            <li style="margin-bottom: 8px;"><strong>Payment Method:</strong> ${data.paymentMethod}</li>
          </ul>
        </div>
        
        <p style="color: #555; font-size: 16px;">If you wish to cancel or make changes, please do so before the renewal date.</p>
        <p style="color: #888; font-size: 14px; margin-top: 30px;">Thank you for using our service!</p>
      </div>
    `,
  },
  {
    label: 'reminder 3 days before',
    generateSubject: (data) => `Action Needed: ${data.subscriptionName} renews in 3 days`,
    generateBody: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333;">Hello ${data.userName},</h2>
        <p style="color: #555; font-size: 16px;">Your subscription for <strong>${data.subscriptionName}</strong> is renewing soon! You have <strong>3 days</strong> left before the charge.</p>
        
        <div style="background-color: #fff8e1; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Renewal Summary:</h3>
          <ul style="list-style-type: none; padding: 0; color: #555;">
            <li style="margin-bottom: 8px;"><strong>Plan:</strong> ${data.planName}</li>
            <li style="margin-bottom: 8px;"><strong>Amount:</strong> ${data.price}</li>
            <li style="margin-bottom: 8px;"><strong>Date:</strong> ${data.renewalDate}</li>
          </ul>
        </div>
        
        <p style="color: #555; font-size: 16px;">Please ensure your payment method is up to date to avoid any interruptions.</p>
      </div>
    `,
  },
  {
    label: 'reminder 1 day before',
    generateSubject: (data) => `Urgent: ${data.subscriptionName} renews tomorrow!`,
    generateBody: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #d32f2f;">Hello ${data.userName},</h2>
        <p style="color: #555; font-size: 16px;">Your subscription for <strong>${data.subscriptionName}</strong> will renew <strong>tomorrow</strong>.</p>
        
        <div style="background-color: #ffebee; padding: 15px; border-left: 4px solid #d32f2f; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Final Notice:</h3>
          <ul style="list-style-type: none; padding: 0; color: #555;">
            <li style="margin-bottom: 8px;"><strong>Amount to be charged:</strong> ${data.price}</li>
            <li style="margin-bottom: 8px;"><strong>Date:</strong> ${data.renewalDate}</li>
            <li style="margin-bottom: 8px;"><strong>Card:</strong> ${data.paymentMethod}</li>
          </ul>
        </div>
        
        <p style="color: #555; font-size: 16px;">If you need to cancel, please do so immediately.</p>
      </div>
    `,
  },
];