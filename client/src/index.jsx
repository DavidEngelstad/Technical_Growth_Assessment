import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './components/login.jsx';
import Home from './components/home.jsx';
import Sidebar from './components/sidebar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            channels: {},
            messages: [],
            activeChannel: '',
            loggedIn: false,
            user: ''
        }
        this.fetchMessages = this.fetchMessages.bind(this);
    }
    
    componentWillMount() {
        this.fetchMessages();
    }

    fetchMessages() {
        axios.get('api/messages')
          .then(response => {
              console.log('In fetch messages...', response);
              this.setState({
                  messages: response.data
              }, () => {console.log(this.state.messages)})
          })
          .catch(err => {
              console.log('Message fetch failed with ...', err);
          })
    }

    loginHandler(param) {
        this.setState({
            loggedIn : true,
            user: param
        });
    }

    render() {
        return(
        <div>
          {this.state.loggedIn ? <Home  state={this.state} messages={this.state.messages} user={this.state.user} /> : <Login login={this.loginHandler.bind(this)} />}
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));