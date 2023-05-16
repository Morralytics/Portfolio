const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
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
    },
    liveUrl: {
        type: String,
        required: true,
        trim: true,
    },
    gitHubUrl: {
        type: String,
        required: true,
        trim: true,
    },
});

const Project = model('Project', projectSchema);

module.exports = Thought;