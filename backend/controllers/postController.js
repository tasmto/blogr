import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';
import { text } from '../templates/postTemplates.js';

/**
 * @description: Fetches a number of posts
 * @route        GET /api/posts
 * @access       Public
 */

const getPosts = asyncHandler(async (req, res) => {
  // Get a querystring i.e. keyword='Clothes'
  const pageSize = Number(req.query.pageSize) || process.env.DEFAULT_PAGE_SIZE;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {};

  const count = await Post.countDocuments({ ...keyword });
  const posts = await Post.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ posts, page, pages: Math.ceil(count / pageSize) }); // both res.send and re.json converts it to JSON
});

/**
 * @description: Fetches a single post
 * @route        GET /api/posts/id
 * @access       Public
 */
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) res.json(post); // both res.send and res.json converts it to JSON
  else {
    res.status(404);
    throw new Error('Post not found');
  }
});

/**
 * @description: DELETES a single post
 * @route        DELETE /api/posts/id
 * @access       Private/ Admin
 */
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

/**
 * @description: Creates a post
 * @route        Post /api/posts
 * @access       Private
 */
const createPost = asyncHandler(async (req, res) => {
  const { template, type } = req.body;
  const typeOfPost = type === 'text' ? text : text;
  const post = new Post({
    ...typeOfPost,
    user: req.user._id,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

/**
 * @description: Update a post
 * @route        Put /api/posts/:id
 * @access       Private/ Admin
 */
const updatePost = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const post = await Post.findById(req.params.id);
  if (post) {
    post.name = name;
    post.price = price;
    post.description = description;
    post.image = image;
    post.brand = brand;
    post.category = category;
    post.countInStock = countInStock;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

/**
 * @description: Create a new post Comment
 * @route        POST /api/posts/:id/reviews
 * @access       Private
 */
const createPostComment = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const post = await Post.findById(req.params.id);
  if (post) {
    const alreadyReviewed = post.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );
    /*
    if (alreadyReviewed) {
      res.status(400);
      throw new Error('This account has already reviewed this post.');
    }*/
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    post.reviews.push(review);
    post.numReviews = post.reviews.length;
    post.rating =
      post.reviews.reduce((total, item) => total + item.rating, 0) /
      post.reviews.length;

    await post.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('post not found');
  }
});

/**
 * @description: Get top rated posts
 * @route        GET /api/posts/top
 * @access       Public
 */

const getTopPosts = asyncHandler(async (req, res) => {
  const amount = Number(req.query.limit) || 4;
  const posts = await Post.find({}).sort({ averageRating: -1 }).limit(amount);
  res.json(posts);
});

export {
  getPostById,
  getPosts,
  deletePost,
  updatePost,
  createPost,
  createPostComment,
  getTopPosts,
};
