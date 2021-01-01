class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.email = data.email;
    this.role = data.role;
    this.createdAt = data.createdAt;
    this.tokens = data.tokens;
    this.status = data.status;
  }
}

export default User;
