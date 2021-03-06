import React from 'react';
import { graphql } from 'react-apollo';
import SetNewRoleForm from './SetNewRoleForm/SetNewRoleForm';
import BrainhubWorkerQuery from './BrainhubWorkerQuery.js';
import './styles.css';

const BrainhubWorker = ({ data, match }) => {
  if (data.loading) {
    return null;
  }

  return (
    <div className="brainhub-worker__container">
      <img src={`http://localhost:4000/static/${data.teamMember.imgSrcBack}`} alt={data.teamMember.name} />
      <div>{data.teamMember.name}</div>
      <div>{data.teamMember.role}</div>
      <div className="brainhub-worker__main-skills-label">Main skills:</div>
      <ul className="brainhub-worker__skills">
        {data.teamMember.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <SetNewRoleForm memberId={match.params.id} />
    </div>
  );
}

export default graphql(BrainhubWorkerQuery,
  {
    options: props => ({
      variables: {
        id: parseInt(props.match.params.id, 10),
      }
    })
  })
(BrainhubWorker);
