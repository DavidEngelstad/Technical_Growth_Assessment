import React from 'react';
import Sidebar from './sidebar.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }



    render() {
        const renderMessages = () => {
            const {messages} = this.props;
            if (messages.length > 0) {
                return messages.map(message => (
                    <div key={message.id}>
                    <strong>{message.username}</strong>  
                    <br />
                    {message.text}
                    </div>
                ))
            }
        }
        return (
            <div>
                <div><Sidebar state={this.props.state} /></div>
                <h3>Logged In As: {this.state.user} </h3>
                {renderMessages()}
            </div>
        ) 
    }
}


export default Home;