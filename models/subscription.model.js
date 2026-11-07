import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'subscription name is required'],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: [true, 'subscription price is required'],
      min: [0, 'price must be greater than 0'],
      max: [1000, 'price must be less than 1000'],
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly'],
    },
    category: {
      type: String,
      enum: ['sports', 'news', 'entertainment'],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'subscription must belong to a user'],
      index: true,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model('subscription', subscriptionSchema);

export default Subscription;