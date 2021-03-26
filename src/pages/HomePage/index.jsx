import NumberContainer from '../../components/NumberContainer'
import CalculatorContainer from '../../components/CalculatorContainer';

import './homepage.css'

const HomePage = () => {
  return (
    <div className="homepage">
    <h1>Pair Programming Erwin-Rizal</h1>
      <NumberContainer />
      <CalculatorContainer />
    </div>
  )
}

export default HomePage
