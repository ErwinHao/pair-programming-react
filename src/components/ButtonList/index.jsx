import Button from "../Button"

const ButtonList = ({ onIncrementHandler, onDecrementHandler, onResetHandler }) => {
  return (
    <div>
      <Button onClick={onIncrementHandler}>Tambah</Button>
      <Button onClick={onResetHandler}>Reset</Button>
      <Button onClick={onDecrementHandler}>Kurang</Button>
    </div>
  )
}

export default ButtonList
