import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    loginHandler() {
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(`api/user/login`, user)
          .then(response => {
              console.log('Server responded with ... ', response);
          })
          .catch(err => {
              console.log('Server errored out with ...', err);
          })
    }

    render() {
        return(
            <div>
                <div>Username: </div>
                <input name='username' onChange={this.onChangeHandler.bind(this)} />
                <div>Password: </div>
                <input name='password' onChange={this.onChangeHandler.bind(this)} />
                <br/><br/>
                <button onClick={this.loginHandler.bind(this)}>Login</button>
                <button>Sign Up</button>
            </div>
        )
    }
}

export default Login;