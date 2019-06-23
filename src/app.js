import React from 'react';
import Display from './components/display';
import Button from './components/button';
import { connect } from 'react-redux';


class App extends React.Component {

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
    this.props.dispatch({type : 'buy'})
  }

  decrCounter = () => {
    if(this.props.count > 0){
      this.props.dispatch({type : 'eat'})
    }
  };


  render() {
    return (<div>
      <Button onClick={this.incrCounter} name="Buy One" />
      <Display numberOfAcorns={this.props.count} />
      <Button onClick={this.decrCounter} name="Eat One" />
    </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    count : state.counter
  };
}

export default connect(mapStateToProps)(App);