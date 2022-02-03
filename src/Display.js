import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="display" className="display">
                {this.props.display}
            </div>
        );
    }
}

export default Display;