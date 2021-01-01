import { Joi, Segments } from 'celebrate';
import { POST_STATUSES } from 'enums';

module.exports = {
  createPost: {
    [Segments.BODY]: {
      title: Joi.string().trim().max(100).required().label('Title'),
      text: Joi.string().trim().max(500).required().label('Text'),
      likes: Joi.array().label('Title'),
    },
  },
  approvePost: {
    [Segments.BODY]: {
      approve_status: Joi.string().valid(POST_STATUSES.ACTIVE, POST_STATUSES.REJECTED).required().label('Approved status'),
    },
  },
};
