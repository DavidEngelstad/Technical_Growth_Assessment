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

    signupHandler() {
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('api/user/signup', user)
          .then(response => {
              console.log('Signup response...', response.data);
          })
          .catch(err => {
              console.log('Signup errored out with...', err);
          })
    }

    loginHandler() {
        var user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(`api/user/login`, user)
          .then(response => {
              console.log('Server responded with ... ', response);
              var user = response.data.passport.user;
              this.props.login(user)
          })
          .catch(err => {
              console.log('Server errored out with ...', err);
          })
    }

    render() {
        return(
            <div>
                <h1>Welcome to Slack</h1>
                <h3>Please Log In</h3>
                <div>Username: </div>
                <input name='username' onChange={this.onChangeHandler.bind(this)} />
                <div>Password: </div>
                <input name='password' type='password' onChange={this.onChangeHandler.bind(this)} />
                <br/><br/>
                <button onClick={this.loginHandler.bind(this)}>Login</button>
                <button onClick={this.signupHandler.bind(this)}>Sign Up</button>
            </div>
        )
    }
}

export default Login;