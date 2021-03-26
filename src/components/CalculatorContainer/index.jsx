import React, { Component } from 'react'
import NumberInput from './NumberInput';
import HasilKalkulator from '../HasilKalkulator';

export class CalculatorContainer extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      operator: '',
      hasil: 0
    }
  }

  // Ini untuk handle kalkulasi berdasarkan value dari operator
  handleKalkulasi = () => {

    // Pake switch case untuk operator
    switch (this.state.operator){
      case '+' :
        this.setState({
          hasil: +this.state.x + +this.state.y
        })
        break;
      case '-' :
        this.setState({
          hasil: this.state.x - this.state.y
        })
        break;
      case '*' :
        this.setState({
          hasil: this.state.x * this.state.y
        })
        break;
      case '/' :
        this.setState({
          hasil: this.state.x / this.state.y
        })
        break;
      default :
        return this.state
    }
  }

  // Sama kaya pelajaran mas Frey tadi, set state yang sementara ke value yang baru
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <NumberInput 
          onClickHandler={this.handleKalkulasi} 
          onChangeHandler={this.handleChange}
        />
        <HasilKalkulator hasil={this.state.hasil} />
      </div>
    )
  }
}

export default CalculatorContainer
