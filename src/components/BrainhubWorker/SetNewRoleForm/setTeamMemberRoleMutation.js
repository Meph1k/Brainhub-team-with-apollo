import gql from "graphql-tag";

export default gql`
  mutation updateTeamMemberRole($id: Int!, $role: String!) {
    updateTeamMemberRole(id: $id, role: $role) {
      id
      name
      role
      imgSrcBack
    }
}
`;
