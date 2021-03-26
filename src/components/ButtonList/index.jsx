import Button from "../Button"

import './button-list.css'

const ButtonList = ({ onIncrementHandler, onDecrementHandler, onResetHandler }) => {
  return (
    <div className="button-list">
      <Button onClick={onIncrementHandler}>Tambah</Button>
      <Button onClick={onResetHandler}>Reset</Button>
      <Button onClick={onDecrementHandler}>Kurang</Button>
    </div>
  )
}

export default ButtonList
