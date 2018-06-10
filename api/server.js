import express from 'express';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import path from 'path';
import team from './data/team';
import cors from 'cors';

const teamSchema = buildSchema(`
  type Query {
    team: [Team]
    teamMember(id: Int!): Team
  }

  type Mutation {
    updateTeamMemberRole(id: Int!, role: String!): Team
  }

  type Team {
    id: Int
    name: String
    role: String
    imgSrcBack: String
    skills: [String]
  }
`);

const getTeam = () => team;
const getTeamMemberData = args => team.filter(teamMember => teamMember.id === args.id)[0];

const updateTeamMemberRole = ({id, role}) => {
  team.map(teamMember => {
    if (teamMember.id === id) {
      teamMember.role = role;
      return teamMember;
    }
  });
  return team.filter(teamMember => teamMember.id === id)[0];
}

const teamRoot = {
  team: getTeam,
  teamMember: getTeamMemberData,
  updateTeamMemberRole,
}

const app = express();

app.use(cors({ origin: '*' }));

app.use('/static', express.static(path.join(__dirname, 'assets', 'images')))

app.use('/graphql', express_graphql({
  schema: teamSchema,
  rootValue: teamRoot,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
