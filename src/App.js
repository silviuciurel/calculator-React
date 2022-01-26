import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div id="display" className="display">
            2+5+3*5
          </div>
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
        </div>
      </div>
    );
  }
}

export default App;
