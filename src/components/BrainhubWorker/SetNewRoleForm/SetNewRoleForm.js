import React from 'react';
import { graphql } from 'react-apollo';
import setTeamMemberRoleMutation from './setTeamMemberRoleMutation.js';
import './style.css';

class SetNewRoleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      role: '',
    }
  }

  handleRoleChange = event => {
    this.setState({ role: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.mutate({
      variables: {
        id: parseInt(this.props.memberId, 10),
        role: this.state.role
      }
    });
  }

  render() {

    return (
      <form className="new-role-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <label>Set new role</label>
          <input className="new-role-input" onChange={this.handleRoleChange} />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default graphql(setTeamMemberRoleMutation)(SetNewRoleForm);
