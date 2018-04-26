import React from 'react';

class Messagebar extends React.Component {
    constructor(props) {
       super();
       this.state = {
           channel: ''
       }
    }
    render() {
        return (
            <div>
                <input name='message' placeholder={this.props.channel} />
            </div>
        )
    }
}