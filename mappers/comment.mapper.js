class Comment {
  constructor(data) {
    this.id = data.id;
    this.text = data.text;
    this.userId = data.user;
    this.postId = data.post;
    this.createdAt = data.createdAt;
  }
}

export default Comment;
