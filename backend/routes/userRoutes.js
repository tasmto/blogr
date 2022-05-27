import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userControllers.js';
import { protect, isAdminOrHigher } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, isAdminOrHigher, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, isAdminOrHigher, deleteUser)
  .get(protect, isAdminOrHigher, getUserById)
  .put(protect, isAdminOrHigher, updateUser);

export default router;
