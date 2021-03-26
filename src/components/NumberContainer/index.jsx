import React, { Component } from 'react'
import ButtonList from '../ButtonList';
import NumberDisplay from './NumberDisplay';

import './number-container.css'

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
      <div className="number-container">
      <h1>Main main angka</h1>
        <NumberDisplay number={this.state.number} />
        <ButtonList 
          onIncrementHandler={this.handleIncrement} 
          onDecrementHandler={this.handleDecrement} 
          onResetHandler={this.handleReset} 
        />
      </div>
    )
  }
}

export default NumberContainer
