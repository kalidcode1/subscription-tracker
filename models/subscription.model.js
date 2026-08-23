import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const subscriptionSchema = new mongoose.schema(
  {
    name:{type: String, required:[true, 'subscription name name is required'],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    price:{
      type: Number,
      required: [true, 'subscription price is required'],
      min:[0, 'price must be greater then 0'],
      max:[1000, 'price must be less then 1000'],
    },
    frequency:{
      type: String,
      enum: ['daily', 'weekly', 'monthly']
    },
    catagory:{
      type: String,
      enum:['sports', 'news', 'entertainment'],
      required: true,
    }
  }, {timestamp: true}


)

const subscription = mongoose.modelS('subscription', subscriptionSchema);

export default subscription