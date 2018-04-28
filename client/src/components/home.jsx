import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import Sidebar from './sidebar.jsx';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            team: this.props.team,
            team_id: this.props.team_id,
            channels: [],
            team_members: [],
            activeChannel: '',
            messages: [],
            message: '',
            channelName: '',
            invite:''
        }

        this.fetchMessages = this.fetchMessages.bind(this);
        this.fetchChannels = this.fetchChannels.bind(this);
        this.changeChannel = this.changeChannel.bind(this);
    }

    componentDidMount() {
        this.socket = io('localhost:3000')
        this.sendMessage = (e) => {
            console.log('In send message...')
            this.socket.emit('SEND_MESSAGE', {
                team_id: this.state.team_id,
                channel: this.state.activeChannel,
                username: this.state.user,
                text: this.state.message
            })
            this.setState({message: ''});
        }
        this.socket.on('RECEIVE_MESSAGE', function(data) {
            console.log('Client receive message...', data);
            addMessage(data);
        });
        const addMessage = (data) => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        }
    }
    componentWillMount() {
        this.fetchChannels();
    }

    fetchChannels() {
        axios.get(`api/channel/${this.state.team_id}`) 
        .then(response => {
            console.log(response);
            this.setState({
                channels: response.data,
                activeChannel: response.data[0].name
            })
            console.log('In Home...', this.state);
             this.fetchMessages();
         })
         .catch(err => {
             console.log(err);
         })
    }

    fetchMessages() {
        console.log('In fetch messages... ', this.state.activeChannel);
        axios.get(`api/messages/${this.state.activeChannel}`)
          .then(response => {
              console.log('In fetch messages...', response);
              this.setState({
                  messages: response.data
              })
          })
          .catch(err => {
              console.log('Message fetch failed with ...', err);
          })
    }

    fetchTeamMembers() {
        console.log('In fetch members')
        axios.get(`api/members/${this.state.team_id}`)
          .then(response => {
              console.log(response);
          })
          .catch(err => {
              console.log(err)
          })
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    addMessage() {
        console.log('In add message...', this.state.team_id);
        axios.post(`api/messages/${this.state.team_id}/${this.state.activeChannel}/${this.state.user}/${this.state.message}`)
          .then(response => {
              console.log(response);
              this.fetchMessages();
          })
          .catch(err => {
              console.log(err);
          })

    }

    createChannel() {
        axios.post(`api/createChannel/${this.state.team_id}/${this.state.channelName}`)
          .then(response => {
              this.fetchChannels();
          })
          .catch(err => {
              console.log(err);
          })
    }

    logoutHandler() {
        axios.get('/api/user/logout')
          .then(response => {
              console.log('Sucessfully logged out...', response);
              this.props.logout();
          })
          .catch(err => {
              console.log('There was an error logging out...', err);
          })
    }

    changeChannel(channel) {
        this.setState({
            activeChannel: channel
        });
        this.fetchMessages();
        console.log("IN CHANGE CHANNEL...");
    }

    renderMessages() {
        if (this.state.messages.length > 0) {
            return this.state.messages.map(message => (
                <li key={message._id}>
                <strong>{message.username}</strong>  
                <br />
                {message.text}
                </li>
            ))
        }
    }

    render() {
        const renderMessages = () => {
            if (this.state.messages.length > 0) {
                return this.state.messages.map(message => (
                    <li key={message._id}>
                    <strong>{message.username}</strong>  
                    <br />
                    {message.text}
                    </li>
                ))
            }
        }
        const renderChannels = () => {
            if (this.state.channels.length > 0) {
                return this.state.channels.map(channel => (
                    <div className="channels box"  key={channel._id}>
                    <a onClick={() => this.changeChannel(channel.name)}>{channel.name}</a>
                    </div>
                ))
            }
        }

        return (
            <div className="app-layout">
                <div className="teams box">
                  <div>Logged In As: {this.state.user} </div>
                  <a href="#" onClick={this.logoutHandler.bind(this)}>Logout</a>
                </div>
                <div className="channels box">
                  <div>On Channel: #{this.state.activeChannel}</div>
                  <input name="channelName" placeholder="create channel" onChange={this.onChangeHandler.bind(this)} />
                  <button onClick={this.createChannel.bind(this)}>Create Channel</button>
                    {renderChannels()}
                    <input name="invite" placeholder="Invide a user" onChange={this.onChangeHandler.bind(this)} />
                    <button onClick={this.sendInvite} onClick={this.addMessage.bind(this)}>Invite</button>
                </div>
                <div className="messages box">
                  <ul className="message-list">
                    {renderMessages()}
                  </ul>
                </div>
                <div className="input box">
                  <input name="message" placeholder={`add message to #${this.state.activeChannel}`} onChange={this.onChangeHandler.bind(this)} />
                  <br />
                  {/* <button onClick={this.addMessage.bind(this)} >Add Message</button> */}
                  <button onClick={this.sendMessage} onClick={this.addMessage.bind(this)}>Send Message</button>
                  
                </div>
            </div>
        ) 
    }
}


export default Home;