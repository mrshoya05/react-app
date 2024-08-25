import "./App.css";
import styles from "./app.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div className={`${styles.calculator}`}>
        <Display displayvalue={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
