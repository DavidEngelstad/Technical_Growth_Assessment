import React from 'react';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        const {username} = this.props;
        console.log('IN SIDEBAR...', username);
        this.state = {
            username: '',
            channels: '',
            directmessages: ''
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.username}</div>
                <div>{this.state.channels}</div>
                <div>{this.state.directmessages}</div>
            </div>
        )
    }
}

export default Sidebar;