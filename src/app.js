import React from 'react';
import Display from './display.js'
import Button from './button'

class App extends React.Component {
  state = {
    counter: 0,
  }

  componentDidMount = () => {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 38) {
        this.incrCounter()
      } else if (event.keyCode === 40) {
        this.decrCounter()
      }
    });
  };

  incrCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrCounter = () => {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  render() {
    return (<div>
      <Button handleClick={this.incrCounter} name="Buy One" />
      <Display numberOfAcorns={this.state.counter} />
      <Button handleClick={this.decrCounter} name="Eat One" />
    </div>
    );

  }
}


export default App;
