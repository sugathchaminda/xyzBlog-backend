import { model, Schema } from 'mongoose';

import { USER_ROLES, USER_STATUSES } from 'enums';

const userSchema = new Schema({
  first_name: {
    type: String,
    minlength: 1,
    maxlength: 20,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    minlength: 1,
    maxlength: 20,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    maxlength: 255,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.USER,
  },
  status: {
    type: String,
    enum: Object.values(USER_STATUSES),
    default: USER_STATUSES.ACTIVE,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('User', userSchema);
