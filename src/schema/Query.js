const Query = `type Query {
  user(username: String!): User
  followers(username: String!): [User]
}`;

module.exports = Query;
