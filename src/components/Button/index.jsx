// Komponen Button tersendiri

// Children itu adalah content dari button, yaitu Tambah, Reset, Kurang
// ...rest adalah props dari button
const Button = ({ children, ...rest }) => {
  return (
    <>
      <button {...rest} >
        {children}
      </button>
    </>
  )
}

export default Button
