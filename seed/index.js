import config from 'config';
import path from 'path';
import seeder from 'mongoose-seed';
import log from 'utils/logger.util';
// eslint-disable-next-line no-unused-vars
import colors from 'colors';
import { DATA_SEEDED } from 'constants/messages.constant';
import adminData from './admin.json';

const dbPath = `mongodb://${config.database.mongodb.host}:${config.database.mongodb.port}/${config.database.mongodb.name}`;

seeder.connect(dbPath, { useNewUrlParser: true, useCreateIndex: true }, () => {
  seeder.loadModels([
    path.join(__dirname, '../models/user.model.js'),
  ]);

  seeder.clearModels(['User'], () => {
    try {
      seeder.populateModels(adminData, () => {
        log.info(DATA_SEEDED.blue.bold);

        process.exit();
      });
    } catch (ex) {
      log.error(`Error occurred on ${ex.seed}`.red.bold);
      process.exit();
    }
  });
});
