
import './App.css'
import Conditionalrendering from './components/Conditionalrendering'
import ErrorMEssage from './components/ErrorMEssage'

function App() {
  // let foodItems = []
         let foodItems = ["dal", "curry", "paratha", "sabji-Roti", "special-thali"]

  return (
    < >
  <h1 className='food-heading'>Healthy food !</h1>
  <Conditionalrendering items={foodItems} />
  <ErrorMEssage items={foodItems} />

    </>
  )
}

export default App
