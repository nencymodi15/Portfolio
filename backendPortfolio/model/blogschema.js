const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
      },
      content: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      photos: [
        {
          type: String, // URLs or file paths to the images
        },
      ],
      tags: [
        {
          type: String, // Tags like "React", "Node.js", etc.
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
})
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;