const { Schema, model } = require('mongoose');

const photographySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    }
});

const Photography = model('Photography', photographySchema);

module.exports = Photography;