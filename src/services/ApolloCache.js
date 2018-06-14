import apolloClient from '../ApolloClient';
import query from '../components/BrainhubWorkers/BrainhubWorkersQuery';

const data = apolloClient.readQuery({
  query
});

export default data;
