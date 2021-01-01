/* eslint-disable no-unused-vars */

import express from 'express';
import colors from 'colors';
import { errors } from 'celebrate';

import log from 'utils/logger.util';
import initialize from './initialize';

import { SERVER_STARED } from './constants/messages.constant';

const app = express();

initialize(app);
app.use(errors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log.info(`${SERVER_STARED} | Mode:${process.env.NODE_ENV} | Port:${PORT}`.yellow.bold));

process.on('unhandledRejection', (ex) => {
  log.error(ex.message.red.bold);
});
