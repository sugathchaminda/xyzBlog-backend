import cron from 'node-cron';
import PostSummarySchedule from './postSummary.schedules';

module.exports = {
  init: () => {
    cron.schedule('0 0 * * *', () => {
      PostSummarySchedule.handle();
    });
  },
};
