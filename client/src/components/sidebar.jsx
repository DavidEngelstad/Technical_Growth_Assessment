import React from 'react';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>{this.props.username}</div>
                <div>{this.props.channels}</div>
                <div>{this.props.directmessages}</div>
            </div>
        )
    }
}