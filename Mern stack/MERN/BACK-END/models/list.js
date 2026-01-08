const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',  // Reference the correct model name
    }]
});

module.exports = mongoose.model('List', listSchema);  // Correctly export the list schema
