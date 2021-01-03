import authService from 'services/auth.service';
import { verifyAuthToken } from 'utils/auth.util';
import { INVALID_TOKEN, NO_TOKEN_PROVIDED } from 'constants/messages.constant';

const protect = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ success: false, message: NO_TOKEN_PROVIDED });
  if (!authorization.startsWith('Bearer')) return res.status(401).json({ error: INVALID_TOKEN });

  const token = authorization.replace('Bearer ', '');

  try {
    const decoded = verifyAuthToken(token);
    const authUser = await authService.getAuthUserByIdAndToken(decoded.id, token);

    req.token = token;
    req.user = { ...authUser.data };
    return next();
  } catch (ex) {
    const statusCode = ex.statusCode || 401;
    const error = ex.message || INVALID_TOKEN;
    const response = { success: false, error };

    return res.status(statusCode).json(response);
  }
};

export default protect;
