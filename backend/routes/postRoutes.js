import express from 'express';
const router = express.Router();
import {
  getPostById,
  getPosts,
  deletePost,
  updatePost,
  createPost,
  getTopPosts,
  createPostComment,
} from '../controllers/postController.js';
import { protect, isAdminOrHigher } from '../middleware/authMiddleware.js';

router.route('/').get(getPosts).post(protect, isAdminOrHigher, createPost);
router.route('/top').get(getTopPosts);

router
  .route('/:id')
  .get(getPostById)
  .delete(protect, isAdminOrHigher, deletePost)
  .put(protect, isAdminOrHigher, updatePost);

router.route('/:id/reviews').post(protect, createPostComment);

export default router;
