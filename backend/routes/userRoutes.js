import express from 'express';
import { signInUser, signUpUser } from '../controllers/userControllers.js';
import {
  isAdmin,
  isLevelOneOrHigher,
  isLevelTwoOrHigher,
  isLevelThreeOrHigher,
  isLoggedIn,
} from '../middleware/authMiddleware.js';

const router = express.Router();

// Login and register routes
router.route('/sign-up').post(signUpUser);
router.route('/sign-in').post(signInUser);

export default router;
