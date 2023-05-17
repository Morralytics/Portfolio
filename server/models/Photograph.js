const { Schema, model } = require('mongoose');

const photographSchema = new Schema({
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

const Photograph = model('Photograph', photographSchema);

module.exports = Photograph;