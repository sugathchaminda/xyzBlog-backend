import mongoose from 'mongoose';
import log from 'utils/logger.util';
import { MONGO_DB_CONNECTED } from 'constants/messages.constant';
import config from 'config';

export default async () => {
  const conn = await mongoose.connect(`mongodb://${config.database.mongodb.host}:${config.database.mongodb.port}/${config.database.mongodb.name}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  log.info(`${MONGO_DB_CONNECTED} | ${conn.connection.host}`.blue.bold);
};
