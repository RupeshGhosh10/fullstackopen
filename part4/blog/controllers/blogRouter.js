const blogRouter = require('express').Router();
const Blog = require('../models/blog');

blogRouter.get('/', (req, res) => {
  Blog.find({}).then(blogs => {
    res.json(blogs);
  });
});

blogRouter.post('/', (req, res) => {
  const newBlog = new Blog(req.body);

  newBlog.save().then(result => {
    res.status(201).json(result);
  });
});

module.exports = blogRouter;
