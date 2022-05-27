import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import {
  ADMIN,
  SUPERADMIN,
  SHERIF,
  DEPUTY,
  VIEWER,
} from '../constants/userRoleConstants.js';

/**
 * @description: Evaluates if the user requesting a resource is logged in.
 * @returns Access to the path is allowed, 401 if not
 */
const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ').at(1);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not Authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not Authorized');
  }
});

/**
 * @description: Evaluates if the user requesting a resource or path is a admin or superAdmin
 * @returns Access to the path is allowed, 401 if not
 */
const isAdminOrHigher = (req, res, next) => {
  // If you are an admin go right through
  if (req.user && (req.user.role === ADMIN || req.user.role === SUPERADMIN))
    return next();

  res.status(401);
  throw new Error('Not authorized as an admin');
};

export { protect, isAdminOrHigher };
