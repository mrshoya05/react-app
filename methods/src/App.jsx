import { useState } from "react";
import "./App.css";
import Conditionalrendering from "./components/Conditionalrendering";
import Cotainer from "./components/Cotainer";
import ErrorMEssage from "./components/ErrorMEssage";
import Foodinput from "./components/Foodinput";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFooditem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFooditem];
      setFoodItems(newItems);
      console.log(newFooditem);
    }
  };

  return (
    <>
      <Cotainer>
        <h1 className="food-heading">Healthy food !</h1>

        <Foodinput handleOnKeyDown={handleOnKeyDown} />
        <ErrorMEssage items={foodItems} />
        <Conditionalrendering items={foodItems} />
      </Cotainer>
      {/* <Cotainer>
        <p>Hello here are list of some Healthy food !</p>
      </Cotainer> */}
    </>
  );
}

export default App;
