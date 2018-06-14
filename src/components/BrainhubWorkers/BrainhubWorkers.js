import React from 'react';
import { graphql } from 'react-apollo';
import {
  Link
} from 'react-router-dom';
// import BrainhubWorkersCache from '../../services/ApolloCache';
import BrainhubWorkersQuery from './BrainhubWorkersQuery.js';
import './styles.css';

const BrainhubWorkers = ({ data }) => (
  <div className="brainhub-workers__container">
    <h1 className="brainhub-workers__container__header">Brainhub team</h1>
    <ul className="brainhub-workers__container__team-members-list">
      {data.team && data.team.map(teamMember => (
        <li className="brainhub-workers__container__team-member" key={teamMember.id}>
          <Link to={`/teamMember/${teamMember.id}`}>
            <img src={`http://localhost:4000/static/${teamMember.imgSrcBack}`} alt={teamMember.name} />
            <div>{teamMember.name}</div>
            <div>{teamMember.role}</div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default graphql(BrainhubWorkersQuery)(BrainhubWorkers);
