const { Octokit } = require("octokit");

module.exports = async (req, res) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    // Get your GitHub profile
    const { data: user } = await octokit.rest.users.getAuthenticated();

    // Get your repositories
    const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser();

    res.json({
      username: user.login,
      followers: user.followers,
      following: user.following,
      repos: repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
      })),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
