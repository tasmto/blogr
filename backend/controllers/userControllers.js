import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateJWTToken.js';

/**
 * @description: Register a new user
 * @route        POST /api/users/sign-up
 * @access       Public
 */
const signUpUser = asyncHandler(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    password,
    avatar,
    preferredColorTheme,
    bio,
  } = req.body;
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
    preferredColorTheme,
    bio,
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
    preferredColorTheme: user.preferredColorTheme,
    favoriteTopics: user.favoriteTopics,
    following: user.following,
    bio: user.bio,
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
    preferredColorTheme: user.preferredColorTheme,
    favoriteTopics: user.favoriteTopics,
    following: user.following,
    bio: user.bio,
    token: generateToken(user._id),
  });
});

/**
 * @description: Gets a user's profile details using their ID
 * @route        POST /api/users/:id
 * @access       Public
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(401);
    throw new Error('User Not found');
  }

  res.status(201).json({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,

    role: user.role,
    avatar: user.avatar,

    following: user.following,
    bio: user.bio,
    //todo attach their posts as well
  });
});

export { signUpUser, signInUser, getUserProfile };
