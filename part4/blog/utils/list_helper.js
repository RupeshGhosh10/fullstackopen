const blog = require('../models/blog');

const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  let sum = 0;

  for (let blog of blogs) {
    sum += blog.likes;
  }

  return sum;
};

const favoriteBlog = blogs => {
  var mostLikedBlog = blogs[0];

  for (let blog of blogs) {
    if (mostLikedBlog.likes < blog.likes) {
      mostLikedBlog = blog;
    }
  }

  return mostLikedBlog;
};

const mostBlogs = blogs => {
  let dict = {};

  let mostBlogsAuthor = {
    author: blogs[0].author,
    blogsCount: 1
  };

  for (let blog of blogs) {
    if (dict[blog.author] == undefined) {
      dict[blog.author] = 1;
    } else {
      dict[blog.author] += 1;
    }
    if (dict[blog.author] > mostBlogsAuthor.blogsCount) {
      mostBlogsAuthor = {
        author: blog.author,
        blogsCount: dict[blog.author]
      };
    }
  }

  return mostBlogsAuthor;
};

const mostLikes = blogs => {
  let dict = {};

  let mostLikedAuthor = {
    author: blogs[0].author,
    likesCount: 1
  };

  for (let blog of blogs) {
    if (dict[blog.author] == undefined) {
      dict[blog.author] = blog.likes;
    } else {
      dict[blog.author] += blog.likes;
    }
    if (dict[blog.author] > mostLikedAuthor.likesCount) {
      mostLikedAuthor = {
        author: blog.author,
        likesCount: dict[blog.author]
      };
    }
  }

  return mostLikedAuthor;
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};
