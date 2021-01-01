class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.text = data.text;
    this.user = data.user;
    this.likes = data.likes;
    this.comments = data.comments;
    this.createdAt = data.createdAt;
    this.status = data.status;
  }
}

export default Post;
