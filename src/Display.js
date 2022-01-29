import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="display" className="display">
                2+5+3*5
            </div>
        );
    }
}

export default Display;