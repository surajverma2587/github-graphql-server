const axiosFetcher = require("../fetchers/axiosFetcher");

const user = async (_, args) => {
  const data = await axiosFetcher(
    `https://api.github.com/users/${args.username}`
  );

  return {
    username: data.login,
    profileImageUrl: data.avatar_url,
    githubUrl: data.html_url,
    followers: data.followers,
    following: data.following,
    name: data.name,
    bio: data.bio,
    company: data.company,
    location: data.location,
    email: data.email,
    twitterUsername: data.twitter_username,
    publicRepos: data.public_repos,
    publicGists: data.public_gists,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};

module.exports = user;
