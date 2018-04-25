import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './components/login.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            channels: {},
            messages: [],
            activeChannel: '',
            user: ''
        }
    }

    fetchMessages() {
        axios.get('api/messages')
          .then(response => {
              this.setState({
                  messages: response.data
              })
          })
          .catch(err => {
              console.log('Message fetch failed with ...', err);
          })
    }

    render() {
        return(
        <div>
          <h1>Hello World</h1>
          <Login />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));