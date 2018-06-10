import ApolloClient from "apollo-boost";
import {InMemoryCache} from 'apollo-cache-inmemory';
import {persistCache} from 'apollo-cache-persist';

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
});

export default client;
