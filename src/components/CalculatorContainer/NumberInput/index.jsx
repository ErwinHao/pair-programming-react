const NumberInput = ({ onClickHandler, onChangeHandler }) => {
  return (
    <div>
      <input type="number" onChange={onChangeHandler} name="x"/>
      <select name="operator" onChange={onChangeHandler} id="">
        <option>Pilih Operator</option>
        <option value="+" >+</option>
        <option value="-" >-</option>
        <option value="*" >*</option>
        <option value="/" >/</option>
      </select>
      <input type="number" onChange={onChangeHandler} name="y"/>

      <button onClick={onClickHandler}>Hitung</button>
    </div>
  )
}

export default NumberInput
