import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    getUsers {
      id
      email
    }
  }
`;
