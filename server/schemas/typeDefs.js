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

    type Photograph {
        _id: ID
        title: String!
        content: String!
        image: String!
    }

    type Query {
        projects: [Project]
        photographs: [Photograph]
    }
`

module.exports = typeDefs;