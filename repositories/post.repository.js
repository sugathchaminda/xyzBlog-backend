import Post from 'models/post.model';
import { POST_STATUSES } from 'enums';


class PostRepository {
  async addPost(post) {
    const savedPost = await post.save();
    return savedPost;
  }

  async getAllPosts() {
    const posts = await Post.find().populate('user', { first_name: 1, last_name: 1 }).select('created_at text title first_name status');
    return posts;
  }

  async getAllActivePosts() {
    const posts = await Post.find({ status: POST_STATUSES.ACTIVE })
      .populate('user', { first_name: 1, last_name: 1 }).select('created_at text title first_name');
    return posts;
  }

  async updatePostById(id, data) {
    const post = await Post.findByIdAndUpdate(id, data, { new: true });
    await post.save();
    return post;
  }

  async updatePost(post) {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: post.id },
      { $set: post },
      { new: true },
    );
    return updatedPost;
  }

  async getPostById(id) {
    const post = await Post.findById(id);
    return post;
  }

  async deletePost(id) {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }

  async getPostByUserId(id) {
    const post = await Post.find({ user: id }).select('title text user likes comments');
    return post;
  }
}

export default PostRepository;
