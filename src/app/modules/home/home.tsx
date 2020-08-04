import React from 'react';

// graphql dependencies
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// styles

type Props = {};
const Home: React.FC<Props> = () => {
  return (
    <div>
      {/* { messages.loading ? <p>loading...</p> : props.renderMessages()} */}
    </div>
  );
};

const GET_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      userId
    }
  }
`;
export default graphql(GET_MESSAGES, { name: 'messages' })(Home);
