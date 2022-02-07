import React, { Component } from 'react';
import './Keyboard.css'

class Keyboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            handleNumber,
            handleClear,
            handleOperator,
            handleDecimal,
            evaluate,
            handleEqual
        } = this.props;
        return (
            <div className="keyboard">
                <div>
                    <button id="clear" className="clear" onClick={handleClear}>
                        AC
                    </button>
                    <button id="divide" onClick={handleOperator}>
                        ÷
                    </button>
                    <button id="seven" onClick={handleNumber}>
                        7
                    </button>
                    <button id="eight" onClick={handleNumber}>
                        8
                    </button>
                    <button id="nine" onClick={handleNumber}>
                        9
                    </button>
                    <button id="four" onClick={handleNumber}>
                        4
                    </button>
                    <button id="five" onClick={handleNumber}>
                        5
                    </button>
                    <button id="six" onClick={handleNumber}>
                        6
                    </button>
                    <button id="one" onClick={handleNumber}>
                        1
                    </button>
                    <button id="two" onClick={handleNumber}>
                        2
                    </button>
                    <button id="three" onClick={handleNumber}>
                        3
                    </button>
                    <button id="zero" className="zero" onClick={handleNumber}>
                        0
                    </button>
                    <button id="decimal" className="decimal" onClick={handleDecimal}>
                        .
                    </button>
                </div>
                <div>
                    <button id="multiply" onClick={handleOperator}>
                        ×
                    </button>
                    <button id="subtract" onClick={handleOperator}>
                        -
                    </button>
                    <button id="add" onClick={handleOperator}>
                        +
                    </button>
                    <button
                        id="equals"
                        className="equals"
                        onClick={() => {
                            evaluate();
                            handleEqual();
                        }}
                    >
                        =
                    </button>
                </div>
            </div>
        );
    }
}

export default Keyboard;