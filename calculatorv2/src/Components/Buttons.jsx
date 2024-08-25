import React from "react";
import styles from "./button.module.css";

const Buttons = ({ onButtonClick }) => {
  // let handlebtnvalue = () => {
  //   console.log("hy");
  // };
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonCon}>
      {btnNames.map((item) => (
        <button
          onClick={() => onButtonClick(item)}
          key={item}
          className={styles.btn}
        >
          {item}
        </button>
      ))}

      {/* <button className={styles.btn}>C</button>
      <button className={styles.btn}>1</button>
      <button className={styles.btn}>2</button>
      <button className={styles.btn}>3</button> */}
    </div>
  );
};

export default Buttons;
