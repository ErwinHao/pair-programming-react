import './hasil-kalkulator.css'

const HasilKalkulator = ({ hasil }) => {
  return (
    <div className='hasil-kalkulator'>
      <h2 className="hasil-hitung">{hasil}</h2>
    </div>
  )
}

export default HasilKalkulator
