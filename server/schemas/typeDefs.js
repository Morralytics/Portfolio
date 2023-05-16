const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        _id: ID
        title: String!
        content: String!
        image: String!
        liveUrl: String!
        gitHubUrl: String!
    }

    type Query {
        projects: [Project]
    }
`

module.exports = typeDefs;