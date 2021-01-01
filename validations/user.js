import { Joi, Segments } from 'celebrate';
import { PASSWORD_VALIDATION_REGEX } from '../constants/validations.constants';

module.exports = {
  signUp: {
    [Segments.BODY]: {
      first_name: Joi.string().trim().max(50).required().label('First Name'),
      last_name: Joi.string().trim().max(50).required().label('Last Name'),
      email: Joi.string().trim().email().required().label('Email Address'),
      password: Joi.string().regex(PASSWORD_VALIDATION_REGEX).required().label('Password'),
    },
  },
  signin: {
    [Segments.BODY]: {
      email: Joi.string().email().required().label('Email Address'),
      password: Joi.string().required().label('Password'),
    },
  },
};
