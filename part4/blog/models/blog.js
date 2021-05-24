const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  author: String,
  title: String,
  url: String,
  likes: Number
});

blogSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  }
});

module.exports = mongoose.model('blog', blogSchema);
