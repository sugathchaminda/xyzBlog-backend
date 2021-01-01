import { asyncHandler } from 'middleware';
import postService from 'services/post.service';
import { USER_ROLES, POST_STATUSES } from 'enums';

/** Get posts */
const getPosts = asyncHandler(async (req, res) => {
  const response = await postService.getAllActivePosts();

  res.status(200).json(response);
});

/** Get all posts */
const getAllPosts = asyncHandler(async (req, res) => {
  const response = await postService.getAllPosts();

  res.status(200).json(response);
});

/** Create post */
const createPost = asyncHandler(async (req, res) => {
  const { body, user: { id, role, status: userStatus } } = req;
  const payload = body;
  payload.user = id;

  // Admin users can post without approval
  payload.status = (role === USER_ROLES.ADMIN) ? POST_STATUSES.ACTIVE : POST_STATUSES.PENDING;

  const response = await postService.addPost(payload, userStatus);

  res.status(201).send(response);
});

/** Get post by id */
const getPostById = asyncHandler(async (req, res) => {
  const response = await postService.getPostById(req.params.id);

  res.status(200).json(response);
});

/** Delete post */
const deletePost = asyncHandler(async (req, res) => {
  const data = {
    userId: req.user.id,
    postId: req.params.id,
    userRole: req.user.role,
  };

  const response = await postService.deletePost(data);
  res.json(response);
});

/** Approve post */
const approvePost = asyncHandler(async (req, res) => {
  const data = {
    status: req.body.approve_status,
    postId: req.params.id,
  };

  const response = await postService.approvePost(data);
  res.json(response);
});

/** Add comment */
const addComment = asyncHandler(async (req, res) => {
  const { body, user: { id }, params: { postId } } = req;

  const payload = body;
  payload.user = id;
  payload.postId = postId;

  const response = await postService.addComment(payload);
  res.send(response);
});

/** Delete comment */
const deleteComment = asyncHandler(async (req, res) => {
  const data = {
    userId: req.user.id,
    postId: req.params.postId,
    commentId: req.params.commentId,
  };

  const response = await postService.deleteComment(data);
  res.json(response);
});

export {
  getPosts,
  getAllPosts,
  createPost,
  getPostById,
  deletePost,
  approvePost,
  addComment,
  deleteComment,
};
