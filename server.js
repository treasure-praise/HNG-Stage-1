const express = require("express");

const app = express();

const date = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    slack_name: "example_name",
    current_day: daysOfWeek[date.getDay()],
    utc_time: date,
    track: "backend",
    github_file_url:
      "https://github.com/treasure-praise/HNG-Stage-1/blob/78f40da71a64db9f2c5d5c69d6051b45712dab8b/server.js",
    github_repo_url: "https://github.com/treasure-praise/HNG-Stage-1",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
