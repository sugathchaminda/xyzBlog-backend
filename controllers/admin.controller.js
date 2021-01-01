import { asyncHandler } from 'middleware';
import adminService from 'services/admin.service';

/** Update user role */
const getAllUsers = asyncHandler(async (req, res) => {
  const response = await adminService.getAllUsers();

  res.status(200).send(response);
});

/** Update user status */
const updateUser = asyncHandler(async (req, res) => {
  const { body: { status }, params: { userId } } = req;

  const response = await adminService.updateUser(status, userId);

  res.status(201).send(response);
});

/** Update user role */
const updateUserRole = asyncHandler(async (req, res) => {
  const { params: { userId } } = req;

  const response = await adminService.updateUserRole(userId);

  res.status(201).send(response);
});

export { updateUser, updateUserRole, getAllUsers };
