const User = `type User {
  username: String!
  profileImageUrl: String!
  githubUrl: String!
  followers: Int
  following: Int
  name: String
  bio: String
  company: String
  location: String
  email: String
  twitterUsername: String
  publicRepos: Int
  publicGists: Int
  createdAt: String
  updatedAt: String
}`;

module.exports = User;
