import gql from "graphql-tag";

export default gql`
  query getSingleBrainhubWorker($id: Int!) {
    teamMember(id: $id) {
      id
      name
      role
      imgSrcBack
      skills
    }
  }
`;
