import User from 'models/user.model';
import AuthRepository from 'repositories/auth.repository';
import PostRepository from 'repositories/post.repository';
import ErrorResponse from 'utils/errorResponse.util';

import { UserMapper } from 'mappers';
import { USER_STATUSES } from 'enums';

import {
  ACCOUNT_CLOSED,
  ACCOUNT_PENDING,
  EMAIL_ALREADY_EXISTS,
  USER_REGISTERED,
  INVALID_CREDENTIALS,
  UNAUTHORIZED,
  USER_LOG_OUT_SUCCESS,
} from 'constants/messages.constant';

import {
  hashPassword,
  matchPasswords,
  generateAuthToken,
} from 'utils/auth.util';

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
    this.postRepository = new PostRepository();
  }

  /** Register user */
  async register(userData) {
    const userByEmail = await this.authRepository.getUserByEmail(userData.email);
    if (userByEmail) throw new ErrorResponse(EMAIL_ALREADY_EXISTS, 400);

    const user = new User(userData);
    user.password = await hashPassword(user.password);

    await this.authRepository.saveUser(user);

    // const token = generateAuthToken(user);

    const response = {
      success: true,
      message: USER_REGISTERED,
    };

    return response;
  }

  /** Login user */
  async login(loginData) {
    const { email, password } = loginData;

    const user = await this.authRepository.getUserByEmail(email);
    if (!user) throw new ErrorResponse(INVALID_CREDENTIALS, 401);

    const passwordMatched = await matchPasswords(password, user.password);
    if (!passwordMatched) throw new ErrorResponse(INVALID_CREDENTIALS, 401);

    if (user.status === USER_STATUSES.PENDING) throw new ErrorResponse(ACCOUNT_PENDING, 400);

    if (user.status === USER_STATUSES.CLOSED) {
      await this.authRepository.activateAccount(user.id);
    }

    const token = generateAuthToken(user);

    user.tokens = user.tokens.concat({ token });

    await this.authRepository.saveUser(user);

    const response = {
      success: true,
      token,
      userRole: user.role,
    };

    return response;
  }

  /** Login user */
  async logout(req) {
    const user = await this.authRepository.getUserByEmail(req.user.email);

    user.tokens = user.tokens.filter((token) => token.token !== req.token);

    await this.authRepository.saveUser(user);

    const response = {
      success: true,
      message: USER_LOG_OUT_SUCCESS,
    };

    return response;
  }


  /** Get current user */
  async getProfileWithPosts(userId) {
    const user = await this.authRepository.getUserById(userId);

    if (user.status === 'Closed') throw new ErrorResponse(ACCOUNT_CLOSED, 401);

    const postData = await this.postRepository.getPostByUserId(userId);

    const mappedUser = new UserMapper(user);

    const response = {
      success: true,
      data: {
        user: mappedUser,
        posts: postData,
      },
    };

    return response;
  }

  /** Get current user */
  async getAuthUser(userId) {
    const user = await this.authRepository.getUserById(userId);

    if (user.status === 'Closed') throw new ErrorResponse(ACCOUNT_CLOSED, 401);

    const mappedUser = new UserMapper(user);

    const response = {
      success: true,
      data: mappedUser,
    };

    return response;
  }

  /** Get current user */
  async getAuthUserByIdAndToken(userId, token) {
    const user = await this.authRepository.getUserByIdAndToken(userId, token);

    if (!user) throw new ErrorResponse(UNAUTHORIZED, 401);

    const mappedUser = new UserMapper(user);

    const response = {
      success: true,
      data: mappedUser,
    };

    return response;
  }

  /** Close account */
  async closeAccount(id) {
    await this.authRepository.closeAccount(id);

    const response = {
      success: true,
      message: ACCOUNT_CLOSED,
    };

    return response;
  }
}

export default new AuthService();
