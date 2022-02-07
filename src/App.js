import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Keyboard from './Keyboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      currentNum: undefined,
      prevNum: undefined,
      operation: undefined
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClear() {
    this.setState({
      display: "0",
      currentNum: undefined,
      prevNum: undefined,
      operation: undefined
    });
  }

  handleOperator(e) {
    let { display, currentNum, prevNum, operation } = this.state;
    const { innerText } = e.target;
    const endWithNegative = /\d[×÷+-]{1}-$/;
    if (endWithNegative.test(display)) {
      this.setState({
        display: display.slice(0, -2) + innerText,
        currentNum: "",
        operation: e.target.id
      });
    } else {
      if (!operation) {
        this.setState({
          display: display + innerText,
          operation: e.target.id,
          prevNum: currentNum,
          currentNum: ""
        });
      } else if (operation && !currentNum) {
        if (innerText !== "-") {
          this.setState({
            display: display.slice(0, -1) + innerText,
            operation: e.target.id
          });
        } else {
          this.setState({
            display: display + innerText,
            currentNum: innerText
          });
        }
      } else if (operation && currentNum && prevNum) {
        this.evaluate();
        this.setState((state) => ({
          display: state.display + innerText,
          operation: e.target.id
        }));
      }
    }
  }

  handleDecimal() {
    const { display, currentNum, prevNum } = this.state;
    if (!display.includes(".") && !String(currentNum).includes(".")) {
      console.log("acces3");
      this.setState({
        display: display + "."
      });
      this.setState((state) => ({
        currentNum: state.currentNum + "."
      }));
    }
    if (!display.includes(".") && currentNum === undefined) {
      console.log("Acces1");
      this.setState({
        display: display + "."
      });
      this.setState((state) => ({
        currentNum: state.display
      }));
    }
    if (display.includes(".") && !String(currentNum).includes(".")) {
      this.setState({
        display: display + "."
      });
      this.setState((state) => ({
        currentNum: state.currentNum + "."
      }));
    }
  }

  handleNumber(e) {
    const { display, currentNum, prevNum } = this.state;
    const { innerText } = e.target;

    if (!Number.isNaN(Number(innerText))) {
      if (display === "0") {
        this.setState({
          display: innerText,
          currentNum: Number(innerText)
        });
      } else {
        this.setState({
          display: display + innerText,
          currentNum: Number(currentNum + innerText)
        });
      }
    }
  }

  evaluate() {
    const { display, currentNum, prevNum, operation } = this.state;
    switch (operation) {
      case "add":
        this.setState({
          prevNum: currentNum + prevNum,
          currentNum: ""
        });
        break;
      case "subtract":
        this.setState({
          prevNum: prevNum - currentNum,
          currentNum: ""
        });
        break;
      case "multiply":
        this.setState({
          prevNum: currentNum * prevNum,
          currentNum: ""
        });
        break;
      case "divide":
        this.setState({
          prevNum: prevNum / currentNum,
          currentNum: ""
        });
        break;
    }
    this.setState((state) => ({
      display: String(state.prevNum)
    }));
  }

  handleEqual() {
    const { display } = this.state;
    this.setState((state) => ({
      display: state.display + " "
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display display={this.state.display} />
          <Keyboard
            handleNumber={this.handleNumber}
            handleClear={this.handleClear}
            handleOperator={this.handleOperator}
            handleDecimal={this.handleDecimal}
            evaluate={this.evaluate}
            handleEqual={this.handleEqual} />
        </div>
      </div>
    );
  }
}

export default App;
