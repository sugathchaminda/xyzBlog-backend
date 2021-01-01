import { model, Schema } from 'mongoose';
import { POST_STATUSES } from 'enums';

import { commentSchema } from './comment.model';

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    maxlength: 100,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    maxlength: 500,
    trim: true,
    required: true,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  comments: [
    { type: commentSchema },
  ],
  status: {
    type: String,
    enum: Object.values(POST_STATUSES),
    default: POST_STATUSES.PENDING,
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default model('Post', postSchema);
