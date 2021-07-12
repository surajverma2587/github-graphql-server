const axiosFetcher = require("../fetchers/axiosFetcher");

const followers = async (_, args) => {
  const data = await axiosFetcher(
    `https://api.github.com/users/${args.username}/followers`
  );

  return data.map((each) => {
    return {
      username: each.login,
      profileImageUrl: each.avatar_url,
      githubUrl: each.html_url,
    };
  });
};

module.exports = followers;
