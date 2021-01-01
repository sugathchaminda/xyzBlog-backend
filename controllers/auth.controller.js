import { asyncHandler } from 'middleware';
import authService from 'services/auth.service';

/** Register user */
const register = asyncHandler(async (req, res) => {
  const response = await authService.register(req.body);
  return res.status(201).send(response);
});

/** Log in user */
const login = asyncHandler(async (req, res) => {
  const response = await authService.login(req.body);
  res.status(201).send(response);
});

/** Log out user */
const logout = asyncHandler(async (req, res) => {
  const response = await authService.logout(req);
  res.status(200).send(response);
});

/** Get profile with posts */
const getAuthProfile = asyncHandler(async (req, res) => {
  const response = await authService.getProfileWithPosts(req.user.id);
  res.status(200).send(response);
});


/** Get auth user */
const getAuthUser = asyncHandler(async (req, res) => {
  const response = await authService.getAuthUser(req.user.id);
  return res.status(200).send(response);
});

/** Close account */
const closeAccount = asyncHandler(async (req, res) => {
  const response = await authService.closeAccount(req.user.id);
  res.status(200).json(response);
});


export {
  register,
  login,
  logout,
  getAuthProfile,
  getAuthUser,
  closeAccount,
};
