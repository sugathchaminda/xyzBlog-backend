import User from 'models/user.model';
import { USER_ROLES } from 'enums';

class AuthRepository {
  async getAllUsers() {
    const users = await User.find().select('status first_name last_name role email');
    return users;
  }

  async getUserById(id) {
    const user = await User.findOne({ _id: id }).select('+password');
    return user;
  }

  async updateUser(userId, status) {
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { status } },
      { new: true },
    );
  }

  async updateUserRole(userId) {
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { role: USER_ROLES.ADMIN } },
      { new: true },
    );
  }
}

export default AuthRepository;
