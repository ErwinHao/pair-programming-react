import React, { Component } from 'react'
import ButtonList from '../ButtonList';
import NumberDisplay from './NumberDisplay';

export class NumberContainer extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
  }

  render() {
    return (
      <>
        <NumberDisplay number={this.state.number} />
        <ButtonList 
          onIncrementHandler={this.handleIncrement} 
          onDecrementHandler={this.handleDecrement} 
          onResetHandler={this.handleReset} 
        />
      </>
    )
  }
}

export default NumberContainer
