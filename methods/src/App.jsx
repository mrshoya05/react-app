import "./App.css";
import Conditionalrendering from "./components/Conditionalrendering";
import Cotainer from "./components/Cotainer";
import ErrorMEssage from "./components/ErrorMEssage";

function App() {
  // let foodItems = []
  let foodItems = ["dal", "curry", "paratha", "sabji-Roti", "special-thali"];

  return (
    <>
      <Cotainer>
        <h1 className="food-heading">Healthy food !</h1>
        <Conditionalrendering items={foodItems} />
        <ErrorMEssage items={foodItems} />
      </Cotainer>
      {/* <Cotainer>
        <p>Hello here are list of some Healthy food !</p>
      </Cotainer> */}
    </>
  );
}

export default App;
