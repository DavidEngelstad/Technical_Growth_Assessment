import React from 'react';
import axios from 'axios';

class CreateTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createTeamName: ''
        }
    }
    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    createTeam() {
        const payload = {
            team_name: this.state.createTeamName
        }
        axios.post('/api/createTeam', payload)
          .then(response => {
              console.log(response);
          })
          .catch(err =>  {
              console.log(err);
          })
    }

    render() {
        return
        (
            <div>
                <h3>Team does not exist! Would you like to create it?</h3>
                <input name="createTeamName" placeholder="Create a team" onChange={this.changeHandler.bind(this)} />
                <button onClick={this.createTeam.bind(this)}>Create</button>
            </div>
        )
    }
}

export default CreateTeam;