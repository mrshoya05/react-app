import "./App.css";
import Conditionalrendering from "./components/Conditionalrendering";
import Cotainer from "./components/Cotainer";
import ErrorMEssage from "./components/ErrorMEssage";
import Foodinput from "./components/Foodinput";

function App() {
  // let foodItems = []
  let foodItems = ["dal", "curry", "paratha", "sabji-Roti", "special-thali"];
  let textToshow = "Food enter y user !";
  const handleOnchange = (e) => {
    console.log(e.target.value);
    textToshow = e.target.value;
  };

  return (
    <>
      <Cotainer>
        <h1 className="food-heading">Healthy food !</h1>
        <Foodinput handleOnchange={handleOnchange} />
        <p className="text-center">{textToshow}</p>

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
