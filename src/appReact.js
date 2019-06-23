import React from 'react';
import Display from './components/display.js'
import Button from './components/button'

class App extends Component {

  state = {
    counter : 0,
  }
  
  componentDidMount = () => {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 38) {
        this.incrCounter()
      } else if (event.keyCode === 40) {
        this.decrCounter()
      }
    })
  };


  incrCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrCounter = () => {
    this.state.counter !== 0 ? this.setState({ counter: this.state.counter - 1 }) : null
  };


  render() {
    console.log(this.state)
    return (<div>
      <Button onClick={this.incrCounter} name="Buy One" />
      <Display numberOfAcorns={this.state.counter} />
      <Button onClick={this.decrCounter} name="Eat One" />
    </div>
    );

  }
}


export default App;
