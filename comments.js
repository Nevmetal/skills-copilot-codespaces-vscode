// Create a web server
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const comments = require("./data/comments");
const products = require("./data/products");
const port = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
app.use(express.static(path.join(__dirname, "public")));

// Parse request body if content-type is JSON
app.use(bodyParser.json());

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:commentId", (req, res) => {
  const commentId = Number(req.params.commentId);
  const getComment = comments.find(comment => comment.id === commentId);
  if (getComment) {
    res.send(getComment);
  } else {
    res.status(404).send("Comment not found");
  }
});

app.post("/comments", (req, res) => {
  const newComment = {
    id: req.params.id,
    body: req.params.body,
    postId: req.params.postId
  };
  comments.push(newComment);
  res.send(newComment);
});

app.put("/comments/:commentId", (req, res) => {
  const commentId = Number(req.params.commentId);
  const updateComment = comments.find(comment => comment.id === commentId);
  if (updateComment) {
    updateComment.body = req.params.body;
    res.send(updateComment);
  } else {
    res.status(404).send("Comment not found");
  }
});

app.delete("/comments/:commentId", (req, res) => {
  const commentId = Number(req.params.commentId);
  const deleteComment = comments.find(comment => comment.id === commentId);
  if (deleteComment) {
    deleteComment.body = req.params.body;
    res.send(deleteComment);
  } else {
    res.status(404).send("Comment not found");
  }
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
//comentario para finalizar commit