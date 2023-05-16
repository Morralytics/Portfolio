import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
query getProjects {
    projects {
      _id
      title
      content
      image
      gitHubUrl
      liveUrl
    }
  }
`;