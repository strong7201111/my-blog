const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(__dirname + "/public"));

var posts = [
  {
    id: 1,
    title: "dead",
    content: "I want to be killed"
  },
  {
    id: 2,
    title: "alive",
    content: "I want to be alive"
  }
];

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/public/index.html");
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/posts", (req, res) => {
  res.render("pages/posts", { posts: posts });
});

app.listen(8080, () => console.log("working on port 8080"));
