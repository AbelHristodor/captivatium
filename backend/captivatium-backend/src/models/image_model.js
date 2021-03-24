const mongoose = require('mongoose');

// Defining Mongoose Schema
const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Defining Mongoose Model
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
