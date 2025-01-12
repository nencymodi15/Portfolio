const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String, // e.g., "Software Engineer", "CEO"
  },
  message: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // URL or file path to the image
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
