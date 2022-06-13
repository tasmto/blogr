import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import {
  ADMIN as admin,
  SAGE as level3User,
  NORMEE as level2User,
  GURU as level1User,
  APPRENTICE as level0User,
} from '../constants/userRoleConstants.js';

/**
 * @description: Evaluates whether if the user requesting a resource is logged in at all.
 * @returns: Access to the resource or a 401 is user is not logged in.
 */

const isLoggedIn = expressAsyncHandler(async (req, res, next) => {
  // Guard clause against if request has no Bearer token.
  if (
    !req.headers.authorization &&
    !req.headers.authorization.startsWith('Bearer')
  ) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  try {
    let token = req.headers.authorization.split(' ').at(1);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password'); // attach the user details to the request but remove the user's password

    next();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error(error);
    res.status(401);
    throw new Error('Not authorized');
  }
});

/**
 * @description: Evaluates whether a user is an admin
 * @returns Access to the path or a 401 if not an admin
 */
const isAdmin = (req, res, next) => {
  // Lets request go to next step if role is an admin
  if (req.user && req.user.role === admin) return next();

  res.status(401);
  throw new Error('Not authorized as an admin');
};

/**
 * @description: Evaluates whether a user is an level 3 role or higher
 * @returns Access to the path or a 401 if not an at least level3
 */
const isLevelThreeOrHigher = (req, res, next) => {
  // Lets request go to next step if role is a level 3 or higher
  if (req.user && (req.user.role === admin || req.user.role === level3User))
    return next();

  res.status(401);
  throw new Error('Not authorized');
};

/**
 * @description: Evaluates whether a user is an level 2 role or higher
 * @returns Access to the path or a 401 if not an at least level2
 */
const isLevelTwoOrHigher = (req, res, next) => {
  // Lets request go to next step if role is a level 2 or higher
  if (
    req.user &&
    (req.user.role === admin ||
      req.user.role === level3User ||
      req.user.role === level2User)
  )
    return next();

  res.status(401);
  throw new Error('Not authorized');
};

/**
 * @description: Evaluates whether a user is an level 1 role or higher
 * @returns Access to the path or a 401 if not an at least level1
 */
const isLevelOneOrHigher = (req, res, next) => {
  // Lets request go to next step if role is an level 1 or higher
  if (
    req.user &&
    (req.user.role === admin ||
      req.user.role === level3User ||
      req.user.role === level2User ||
      req.user.role === level1User)
  )
    return next();

  res.status(401);
  throw new Error('Not authorized');
};

export {
  isAdmin,
  isLevelOneOrHigher,
  isLevelTwoOrHigher,
  isLevelThreeOrHigher,
  isLoggedIn,
};
