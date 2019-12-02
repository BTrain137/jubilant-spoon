import React from 'react';
import { ApolloClient, ApolloProvider } from "react-apollo";
import './App.css';

const client = new ApolloClient();

function App() {
  return (
    <ApolloClient client={client}>
      <div className="App">

      </div>
    </ApolloClient>
  );
}

export default App;
