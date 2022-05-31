import express from 'express';
const router = express.Router();
import { getTinyMCEKey } from '../controllers/secretsController.js';

import { protect, isAdminOrHigher } from '../middleware/authMiddleware.js';

router.route('/tinymce').get(protect, getTinyMCEKey);

export default router;
