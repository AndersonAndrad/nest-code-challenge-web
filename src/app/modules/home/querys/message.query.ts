import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      userId
    }
  }
`;

export const GET_USERS_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      userId
      user {
        id
        email
      }
    }
  }
`;
