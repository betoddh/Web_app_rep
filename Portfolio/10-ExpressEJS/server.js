const express = require('express');
const app = express();
const https = require("https");
const FormData=require("form-data");



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));//route for static objects 
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

let posts = []; // Lista para almacenar los posts

app.get("/", (req, res) => {
  res.render("home", { name: null, method: null, posts: [] }); // Inicialmente sin saludo
});

app.get("/login", (req, res) => {
  const name = req.query.name || "Guest"; 
  res.render("home", { name, method: "GET", posts });
});

app.post("/login", (req, res) => {
  const name = req.body.name || "Guest"; 
  res.render("home", { name, method: "POST", posts });
});

app.post("/newpost", (req, res) => {
  const { title, content } = req.body;
  const id = posts.length + 1; // Generar un ID simple
  posts.push({ id, title, content });
  res.redirect(`/login?name=${req.body.name}`); // Redirigir con el nombre del usuario
});

app.get("/post/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.render("post", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/editpost/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = posts.find(p => p.id === parseInt(id));
  if (post) {
    post.title = title;
    post.content = content;
    res.redirect(`/post/${id}`);
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/deletepost/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== parseInt(id));
  res.redirect(`/login?name=${req.body.name}`); // Redirigir con el nombre del usuario
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});