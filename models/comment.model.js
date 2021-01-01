import { model, Schema } from 'mongoose';

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  text: {
    type: String,
    maxlength: 500,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Comment', commentSchema);

export { commentSchema };
