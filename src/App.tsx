import React from 'react';
import Routes from './routes';

// apollo dependencies
import { ApolloProvider } from '@apollo/client';
import apolloClient from './config/service/api/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
