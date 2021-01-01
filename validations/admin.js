import { Joi, Segments } from 'celebrate';
import { USER_STATUSES } from 'enums';

module.exports = {
  updateUser: {
    [Segments.BODY]: {
      status: Joi.string().required().valid(USER_STATUSES.ACTIVE, USER_STATUSES.BLOCKED, USER_STATUSES.CLOSED).required().label('Status'),
    },
  },
};
