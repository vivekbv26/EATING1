import mongoose from "mongoose";
import { body } from 'express-validator'; // We need to install 'express-validator' for email validation.

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    minlength: [2, 'Name must have minimum 2 characters'],
    maxlength: [50, 'Name must have maximum 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    validate: {
      validator: function(value) {
        return body('email').isEmail().run({body: {email: value}});
      },
      message: 'Please provide a valid email',
    },
  },
  subscription: {
    status: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: {
        values: ['basic', 'premium', 'pro'],
        message: 'Subscription type must be either: basic, premium or pro',
      },
      default: 'basic',
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return this.startDate < value;
        },
        message: 'End date must be greater than start date',
      },
    },
  },
  address: {
    line1: {
      type: String,
      trim: true,
      maxlength: [100, 'Address must have maximum 100 characters'],
    },
    line2: {
      type: String,
      trim: true,
      maxlength: [100, 'Address must have maximum 100 characters'],
    },
    city: {
      type: String,
      trim: true,
      maxlength: [50, 'City name must have maximum 50 characters'],
    },
    state: {
      type: String,
      trim: true,
      maxlength: [50, 'State name must have maximum 50 characters'],
    },
    zip: {
      type: String,
      trim: true,
      maxlength: [15, 'ZIP code must have maximum 15 characters'],
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
