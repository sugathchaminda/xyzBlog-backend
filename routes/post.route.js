import express from 'express';
import { celebrate } from 'celebrate';
import {
  getPosts,
  getAllPosts,
  createPost,
  getPostById,
  editPost,
  deletePost,
  approvePost,
  addComment,
  deleteComment,
} from 'controllers/post.controller';
import { protect, authorize } from 'middleware';
import validations from 'validations';
import { USER_ROLES } from 'enums';


const router = express.Router();

/**
 * ROUTE    GET: api/posts
 * DESC     Get all active posts
 * ACCESS   private
*/
router
  .route('/')
  .get([protect], getPosts);

/**
 * ROUTE    GET: api/allPosts
 * DESC     Get all posts
 * ACCESS   private
*/
router
  .route('/all')
  .get([protect, authorize(USER_ROLES.ADMIN)], getAllPosts);

/**
* ROUTE    POST: api/posts
* DESC     Add post
* ACCESS   private
*/
router
  .route('/')
  .post([protect, celebrate(validations.post.createPost)], createPost);

/**
 * ROUTE    GET: api/posts/:id
 * DESC     Get post by id
 * ACCESS   private
*/
router
  .route('/:id')
  .get([protect], getPostById);

/**
 * ROUTE    PUT: api/posts/:id
 * DESC     Edit post
 * ACCESS   private
*/
router
  .route('/:id')
  .put([protect], editPost);


/**
 * ROUTE    DELETE: api/posts/:id
 * DESC     Delete post
 * ACCESS   private
*/
router
  .route('/:id')
  .delete([protect], deletePost);


/**
 * ROUTE    PUT: api/posts/approve/:id
 * DESC     Approve post
 * ACCESS   private
*/
router
  .route('/approve/:id')
  .put([protect, authorize(USER_ROLES.ADMIN), celebrate(validations.post.approvePost)], approvePost);

/**
* ROUTE    POST: api/comment/:postId
* DESC     Add comment
* ACCESS   private
*/
router
  .route('/:postId/comment')
  .post([protect], addComment);

/**
 * ROUTE    DELETE: api/posts/comment/:commentId
 * DESC     Delete comment
 * ACCESS   private
*/
router
  .route('/:postId/comment/:commentId')
  .delete([protect], deleteComment);

export default router;
