import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './components/login.jsx';
import Home from './components/home.jsx';
import Sidebar from './components/sidebar.jsx';
import SelectRoom from './components/selectroom.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            selectedTeam: false,
            team: '',
            team_id: '',
            user: ''
        }
    }
    
    loginHandler(param) {
        this.setState({
            loggedIn : true,
            user: param
        });
    }

    logoutHandler() {
        this.setState({
            loggedIn: false,
            user: '',
            selectedTeam: false,
            team: '',
            team_id: ''
        })
    }

    selectTeam(param) {
        console.log('Array param...', param);
        this.setState({
            selectedTeam: true,
            team: param[0],
            team_id: param[1]
        })
        console.log(this.state);
    }

    render() {
        return(
        <div>
          {this.state.loggedIn ? (this.state.team_id ? <Home  team_id={this.state.team_id} team={this.state.team} messages={this.state.messages} user={this.state.user} logout={this.logoutHandler.bind(this)}/> : <SelectRoom selected={this.selectTeam.bind(this)}/>) : <Login login={this.loginHandler.bind(this)} />}
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));