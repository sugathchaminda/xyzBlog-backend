import express from 'express';
import { celebrate } from 'celebrate';
import { updateUser, updateUserRole, getAllUsers } from 'controllers/admin.controller';
import { protect, authorize } from 'middleware';
import validations from 'validations';
import { USER_ROLES } from 'enums';

const router = express.Router();

/**
 * ROUTE    GET: api/admin/users
 * DESC     Get all users
 * ACCESS   private
*/
router
  .route('/users')
  .get([protect, authorize(USER_ROLES.ADMIN)], getAllUsers);

/**
 * ROUTE    PATCH: /api/v1/admin/update/user
 * DESC     Update user status
 * ACCESS   private
*/
router
  .route('/update/user/:userId')
  .patch([protect, authorize(USER_ROLES.ADMIN), celebrate(validations.admin.updateUser)], updateUser);

/**
 * ROUTE    PATCH: /api/v1/admin/update/userRole
 * DESC     Update user role
 * ACCESS   private
*/
router
  .route('/update/userRole/:userId')
  .patch([protect, authorize(USER_ROLES.ADMIN)], updateUserRole);

export default router;
