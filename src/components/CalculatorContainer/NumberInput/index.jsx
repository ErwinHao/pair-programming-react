import Button from '../../Button'

import './number-input.css'

const NumberInput = ({ onClickHandler, onChangeHandler }) => {
  return (
    <div className="number-input">
    <h1>Kalkulator Palsu</h1>
      <input type="number" onChange={onChangeHandler} name="x"/>
      <select name="operator" onChange={onChangeHandler} id="">
        <option>Pilih Operator</option>
        <option value="+" >+</option>
        <option value="-" >-</option>
        <option value="*" >*</option>
        <option value="/" >/</option>
      </select>
      <input type="number" onChange={onChangeHandler} name="y"/>

      <Button onClick={onClickHandler}>Hitung</Button>
    </div>
  )
}

export default NumberInput
