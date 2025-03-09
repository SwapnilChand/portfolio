const { Octokit } = require("octokit");

module.exports = async (req, res) => {
  const repoName = req.query["repo-name"];
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    // Handle GET request
    if (req.method === "GET") {
      const { data: repo } = await octokit.rest.repos.get({
        owner: process.env.GITHUB_USERNAME,
        repo: repoName,
      });

      return res.json({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url,
      });
    }

    // Handle POST request (create issue)
    if (req.method === "POST") {
      const { data: issue } = await octokit.rest.issues.create({
        owner: process.env.GITHUB_USERNAME,
        repo: repoName,
        title: req.body.title,
        body: req.body.body,
      });

      return res.json({
        url: issue.html_url,
      });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
