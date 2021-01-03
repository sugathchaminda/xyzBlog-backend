import User from 'models/user.model';
import { USER_STATUSES } from 'enums';

class AuthRepository {
  async saveUser(user) {
    await user.save();
  }

  async getUserById(id) {
    const user = await User.findById(id).select('+password');
    return user;
  }

  async getUserByIdAndToken(id, token) {
    const user = await User.findOne({ _id: id, 'tokens.token': token }).select('+password');
    return user;
  }

  async getUserByEmail(email) {
    const user = await User.findOne({ email }).select('+password');
    return user;
  }

  async closeAccount(userId) {
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { status: USER_STATUSES.CLOSED } },
      { new: true },
    );
  }

  async activateAccount(userId) {
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { status: USER_STATUSES.ACTIVE } },
      { new: true },
    );
  }
}

export default AuthRepository;
