import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';
import './index.css';


/* Creating a new ApolloClient with a cache and a link. */
const client = new ApolloClient({

  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://beta.pokeapi.co/graphql/v1beta'
  })

})


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
