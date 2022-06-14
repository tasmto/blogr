import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateJWTToken.js';

/**
 * @description: Register a new user
 * @route        POST /api/users/sign-up
 * @access       Public
 */
const signUpUser = asyncHandler(async (req, res) => {
  const { email, firstName, lastName, password, avatar } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    password,
    email,
    avatar,
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  res.status(201).json({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    bookmarks: user.bookmarks,
    token: generateToken(user._id),
  });
});

/**
 * @description: Register a new user
 * @route        POST /api/users/sign-in
 * @access       Public
 */
const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  const passwordMatches = await user.matchPassword(password);

  if (!passwordMatches) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  res.status(201).json({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    bookmarks: user.bookmarks,
    token: generateToken(user._id),
  });
});

export { signUpUser, signInUser };
