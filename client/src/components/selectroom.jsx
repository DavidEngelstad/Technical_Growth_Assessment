import React from 'react';
import axios from 'axios';
import CreateTeam from './createTeam.jsx';

class SelectRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: '',
            createTeam: false
        }
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    selectTeam() {
        console.log(this.state.team);
        axios.get(`/api/findTeam/${this.state.team}`)
          .then(response => {
              console.log('Sever responded to select team with...', response);
              if (response.data === '') {
                  console.log('Team does not exist');
                  this.setState({
                      createTeam: true
                  })
              }
              this.props.selected([response.data.team_name, response.data._id]);  //CHANGE THIS TO A UNIQUE IDENIFIER!
          })
          .catch(err => {
              console.log('Server errored out to select team with...', err);
          })

    }

    createTeam() {
        const payload = {
            team_name: this.state.createTeamName
        }
        axios.post('/api/createTeam', payload)
          .then(response => {
              console.log(response);
              this.selectTeam();
          })
          .catch(err =>  {
              console.log(err);
          })
    }

    render() {
        return ( 
            <div>
               {
                this.state.createTeam ?
                 <div>
                     <h3>Team does not exist! Would you like to create it?</h3>
                     <input name="createTeamName" placeholder="Create a team" onChange={this.changeHandler.bind(this)} />
                     <button onClick={this.createTeam.bind(this)}>Create</button>
                 </div>
                 :
                 <div>
                    <input name="team" placeholder="Enter Room..." onChange={this.changeHandler.bind(this)} />
                    <button onClick={this.selectTeam.bind(this)} >Join</button>
                </div>
               }
            </div>
        )
    } 
}

export default SelectRoom;



{/* <div>
{this.state.createTeam} ?
     ( <div><CreateTeam /></div>)
:
     (
        <div>
            <input name="team" placeholder="Enter Room..." onChange={this.changeHandler.bind(this)} />
            <button onClick={this.selectTeam.bind(this)} >Join</button>
        </div>
     )
</div>)
}  */}