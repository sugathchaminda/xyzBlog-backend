import express from 'express';
import { celebrate } from 'celebrate';

import {
  register,
  login,
  logout,
  getAuthProfile,
  getAuthUser,
  closeAccount,
} from 'controllers/auth.controller';

import { protect, authorize } from 'middleware';
import validations from '../validations';


const router = express.Router();

/**
 * ROUTE    POST: /api/vi/auth/register
 * DESC     Register user
 * ACCESS   public
*/
router
  .route('/register')
  .post([celebrate(validations.user.signUp)], register);

/**
 * ROUTE    POST: /api/v1/auth/login
 * DESC     Login user
 * ACCESS   public
*/
router
  .route('/login')
  .post([celebrate(validations.user.signin)], login);

/**
 * ROUTE    POST: /api/v1/auth/logout
 * DESC     Get current user
 * ACCESS   private
*/
router
  .route('/logout')
  .post([protect], logout);

/**
 * ROUTE    POST: /api/v1/auth/profile
 * DESC     Get profile and posts
 * ACCESS   private
*/
router
  .route('/profile')
  .get([protect], getAuthProfile);


/**
 * ROUTE    POST: /api/v1/auth/me
 * DESC     Get current user
 * ACCESS   private
*/
router
  .route('/me')
  .get([protect, authorize('User')], getAuthUser);

/**
 * ROUTE    PATCH: /api/v1/auth/closeAccount
 * DESC     Close user account
 * ACCESS   private
*/
router
  .route('/closeAccount')
  .patch([protect], closeAccount);

export default router;
