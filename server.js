const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    slack_name: "example_name",
    current_day: "Monday",
    utc_time: "2023-08-21T15:04:05Z",
    track: "backend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
