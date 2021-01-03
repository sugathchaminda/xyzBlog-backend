import ErrorResponse from 'utils/errorResponse.util';
import AdminRepository from 'repositories/admin.repository';
import {
  ACCOUNT_CLOSED,
  USER_UPDATED,
} from 'constants/messages.constant';

class AdminService {
  constructor() {
    this.adminRepository = new AdminRepository();
  }

  /** Get all users */
  async getAllUsers() {
    const users = await this.adminRepository.getAllUsers();

    const response = {
      success: true,
      data: users,
    };

    return response;
  }


  /** Update user status */
  async updateUser(status, userId) {
    const user = await this.adminRepository.getUserById(userId);

    if (user.status === 'Closed') throw new ErrorResponse(ACCOUNT_CLOSED, 401);
    await this.adminRepository.updateUser(userId, status);

    const response = {
      success: true,
      message: USER_UPDATED,
    };

    return response;
  }

  /** Update user role */
  async updateUserRole(userId) {
    const user = await this.adminRepository.getUserById(userId);

    if (user.status === 'Closed') throw new ErrorResponse(ACCOUNT_CLOSED, 401);
    await this.adminRepository.updateUserRole(userId);

    const response = {
      success: true,
      message: USER_UPDATED,
    };

    return response;
  }
}

export default new AdminService();
