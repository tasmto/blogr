import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js';

/**
 * @description: Authenticate the user & get a token
 * @route        POST /api/users/login
 * @access       Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password)))
    res.json({
      _id: user._id,
      firstName: user.firstName,
      LastName: user.lastName,
      role: user.role,
      email: user.email,
      token: generateToken(user._id),
    });
  else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

/**
 * @description: Get user Profile
 * @route        GET /api/users/profile
 * @access       Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.user._id);
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      LastName: user.lastName,
      role: user.role,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

/**
 * @description: Updates user info
 * @route        PUT /api/users/profile
 * @access       Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;

    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      firstName: user.firstName,
      LastName: user.lastName,
      role: user.role,
      email: user.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

/**
 * @description: Register a new user
 * @route        POST /api/users/profile
 * @access       Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

/**
 * @description: Get all users
 * @route        GET /api/users
 * @access       Private/Admin
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

/**
 * @description: Delete a user
 * @route        DELETE /api/users/:id
 * @access       Private/Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
/**
 * @description: GET a user by ID
 * @route        GET /api/users/:id
 * @access       Private/Admin
 */
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) res.json(user);
  else {
    res.status(404);
    throw new Error('User not found');
  }
});

/**
 * @description: Updates user info
 * @route        PUT /api/users/:id
 * @access       Private/Admin
 */
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;

    user.role = req.body.role || user.role;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  getUserById,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
};
