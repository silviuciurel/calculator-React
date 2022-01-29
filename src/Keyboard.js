import React, { Component } from 'react';
import './Keyboard.css'

class Keyboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="keyboard">
                <div>
                    <button id="clear" className="clear">
                        AC
                    </button>
                    <button>÷</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button id="zero" className="zero">
                        0
                    </button>
                    <button id="decimal" className="decimal">
                        .
                    </button>
                </div>
                <div>
                    <button>×</button>
                    <button>-</button>
                    <button>+</button>
                    <button id="equals" className="equals">
                        =
                    </button>
                </div>
            </div>
        );
    }
}

export default Keyboard;