const { Project, Photograph } = require('../models');

const resolvers = {
    Query: {
        projects: async () => {
            return Project.find()
        },
        photographys: async () => {
            return Photograph.find()
        }
    },
};

module.exports = resolvers;