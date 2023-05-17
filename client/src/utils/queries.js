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

export const QUERY_PHOTOGRAPHS = gql`
query getPhotographs {
  photographs {
    _id
    title
    content
    image
  }
}
`;