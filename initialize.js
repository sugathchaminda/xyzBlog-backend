import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import connectDB from 'database';
import objectIdValidation from 'utils/objectId.util';
import routes from 'routes';
import bodyParser from 'body-parser';
import config from 'config';
import { ENVIRONMENTS } from 'enums';
import { limiterOptions } from 'constants/options.constant';
import { errorHandler } from 'middleware';
import schedules from './schedules';

export default (app) => {
  app.use(helmet());
  app.use(hpp());
  app.use(cors({ origin: config.cors_urls }));
  app.use(rateLimit(limiterOptions));


  if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
    app.use(morgan('dev'));
  }

  app.use(express.static(path.join(__dirname, 'res')));

  connectDB();
  // scheduler init
  schedules.init();
  routes(app);
  objectIdValidation();
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(errorHandler);
};
