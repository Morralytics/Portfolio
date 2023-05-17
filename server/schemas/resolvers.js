const { Project, Photograph } = require('../models');

const resolvers = {
    Query: {
        projects: async () => {
            return Project.find()
        },
        photographs: async () => {
            return Photograph.find()
        }
    },
};

module.exports = resolvers;