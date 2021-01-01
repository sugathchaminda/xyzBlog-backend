import _async from 'async';
import Post from 'models/post.model';
import User from 'models/user.model';
import Mailer from 'utils/email.util';
import log from 'utils/logger.util';
import { SENDGRID_TEMPLATES } from 'constants/common.constant';

class PostSummarySchedule {
  static async handle() {
    try {
      const criteria = { updated_at: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) }, status: 'Active' };

      const noOfPosts = await Post.find(criteria).countDocuments();
      const users = await User.find({ status: 'Active' }).select('-_id email');

      const emailTemplateData = {
        noOfPosts,
      };
      _async.each(users, async (user) => {
        const { email } = user;
        try {
          await Mailer.send({ to: email }, SENDGRID_TEMPLATES.POST_SUMMARY, emailTemplateData);
        } catch (error) {
          log.error(email, 'CRONJOB', 'Email send for expiry notice', error.message);
        }
      });
    } catch (error) {
      log.error(error);
    }
  }
}

module.exports = PostSummarySchedule;
