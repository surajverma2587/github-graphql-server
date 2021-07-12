const user = require("./user");
const followers = require("./followers");

const resolvers = {
  Query: {
    user,
    followers,
  },
};

module.exports = resolvers;
