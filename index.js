console.log("chai aur code ");
require("dotenv").config();
//console.log(process.env); // remove this after you've confirmed it is working
const express = require("express"); // object bana lia
const app = express(); // varibale bana lia app
const port = process.env.PORT;
const githubData = {
  login: "Ybisaria",
  id: 133559416,
  node_id: "U_kgDOB_X0eA",
  avatar_url: "https://avatars.githubusercontent.com/u/133559416?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Ybisaria",
  html_url: "https://github.com/Ybisaria",
  followers_url: "https://api.github.com/users/Ybisaria/followers",
  following_url: "https://api.github.com/users/Ybisaria/following{/other_user}",
  gists_url: "https://api.github.com/users/Ybisaria/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Ybisaria/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Ybisaria/subscriptions",
  organizations_url: "https://api.github.com/users/Ybisaria/orgs",
  repos_url: "https://api.github.com/users/Ybisaria/repos",
  events_url: "https://api.github.com/users/Ybisaria/events{/privacy}",
  received_events_url: "https://api.github.com/users/Ybisaria/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-05-14T05:57:49Z",
  updated_at: "2025-06-01T19:47:14Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("NinjaHatori@98");
});
app.get("/login", (req, res) => {
  res.send("<h1> at login code <h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code<h2>");
});
app.get("/admin", (req, res) => {
  res.send("hi im yash the admin");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
