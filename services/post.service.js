import Post from 'models/post.model';
import Comment from 'models/comment.model';
import ErrorResponse from 'utils/errorResponse.util';
import PostRepository from 'repositories/post.repository';
import { USER_ROLES, USER_STATUSES } from 'enums';
import { PostMapper } from 'mappers';
import {
  POST_ADDED,
  POST_DELETED,
  POST_UPDATED,
  COMMENT_ADDED,
  COMMENT_DELETED,
  POST_NOT_FOUND,
  USER_NOT_AUTHORIZED,
  COMMENT_NOT_FOUND,
  USER_BLOCKED,
} from 'constants/messages.constant';

class PostService {
  constructor() {
    this.postRepository = new PostRepository();
  }

  /** Add post */
  async addPost(postDto, userStatus) {
    if (userStatus === USER_STATUSES.BLOCKED) throw new ErrorResponse(USER_BLOCKED, 401);

    const postToAdd = new Post(postDto);
    const savedPost = await this.postRepository.addPost(postToAdd);
    const mappedPost = new PostMapper(savedPost);

    const response = {
      success: true,
      message: POST_ADDED,
      data: mappedPost,
    };

    return response;
  }

  /** Get all active posts */
  async getAllActivePosts() {
    const posts = await this.postRepository.getAllActivePosts();

    const response = {
      success: true,
      data: posts,
    };

    return response;
  }

  /** Get all posts */
  async getAllPosts() {
    const posts = await this.postRepository.getAllPosts();

    const response = {
      success: true,
      data: posts,
    };

    return response;
  }

  /** Get post by id */
  async getPostById(postId) {
    const post = await this.postRepository.getPostById(postId);
    if (!post) throw new ErrorResponse(POST_NOT_FOUND, 404);

    const mappedPost = new PostMapper(post);

    const response = {
      success: true,
      data: mappedPost,
    };

    return response;
  }

  /** Edit post by id */
  async editById(payload) {
    const post = await this.postRepository.getPostById(payload.postId);
    if (!post) throw new ErrorResponse(POST_NOT_FOUND, 404);

    // User authorization check
    if (post.user.toString() !== payload.userId && payload.userRole !== USER_ROLES.ADMIN) throw new ErrorResponse(USER_NOT_AUTHORIZED, 403);

    post.title = payload.title;
    post.text = payload.text;

    const updatedPost = await this.postRepository.updatePostById(payload.postId, post);
    const mappedPost = new PostMapper(updatedPost);

    const response = {
      success: true,
      data: mappedPost,
    };

    return response;
  }

  /** Delete post */
  async deletePost(payload) {
    const post = await this.postRepository.getPostById(payload.postId);
    if (!post) throw new ErrorResponse(POST_NOT_FOUND, 404);

    // Admin can delete any post
    if (post.user.toString() !== payload.userId && payload.userRole !== USER_ROLES.ADMIN) throw new ErrorResponse(USER_NOT_AUTHORIZED, 403);

    const deletedPost = await this.postRepository.deletePost(payload.postId);
    const mappedPost = new PostMapper(deletedPost);

    const response = {
      success: true,
      message: POST_DELETED,
      data: mappedPost,
    };

    return response;
  }

  /** Approve post */
  async approvePost(postDto) {
    const post = await this.postRepository.getPostById(postDto.postId);
    if (!post) throw new ErrorResponse(POST_NOT_FOUND, 404);

    const fieldsToUpdate = {
      status: postDto.status,
    };

    const updatedPost = await this.postRepository.updatePostById(postDto.postId, fieldsToUpdate);
    const mappedPost = new PostMapper(updatedPost);

    const response = {
      success: true,
      message: POST_UPDATED,
      data: mappedPost,
    };

    return response;
  }

  /** Add comment */
  async addComment(payload) {
    const post = await this.postRepository.getPostById(payload.postId);
    if (!post) throw new ErrorResponse(POST_NOT_FOUND, 404);

    const commentToAdd = new Comment(payload);
    post.comments.unshift(commentToAdd);

    const savedPost = await this.postRepository.addPost(post);
    const mappedPost = new PostMapper(savedPost);


    const response = {
      success: true,
      message: COMMENT_ADDED,
      data: mappedPost,
    };

    return response;
  }

  /** Delete comment */
  async deleteComment(payload) {
    const post = await this.postRepository.getPostById(payload.postId);
    if (!post) throw new ErrorResponse(POST_NOT_FOUND, 404);

    const commentToDelete = post.comments.find((comment) => comment.id === payload.commentId);
    if (!commentToDelete) throw new ErrorResponse(COMMENT_NOT_FOUND, 404);

    if (commentToDelete.user.toString() !== payload.userId) throw new ErrorResponse(USER_NOT_AUTHORIZED, 403);

    const removeIndex = post.comments.map((comment) => comment.id).indexOf(payload.commentId);
    post.comments.splice(removeIndex, 1);

    const deletedPost = await this.postRepository.addPost(post);
    const mappedPost = new PostMapper(deletedPost);

    const response = {
      success: true,
      message: COMMENT_DELETED,
      data: mappedPost,
    };

    return response;
  }
}

export default new PostService();
