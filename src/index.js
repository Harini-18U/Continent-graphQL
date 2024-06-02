import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Continents from './components/Continents';
import Countries from './components/Countries';
import './index.css';

// Set up Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Continents />} />
          <Route path="continent/:code" element={<Countries />} />
        </Route>
      </Routes>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);