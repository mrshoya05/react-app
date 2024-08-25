import React from "react";
import styles from "../input.module.css";

const Foodinput = ({ handleOnKeyDown }) => {
  return (
    <input
      className={styles.Foodinput}
      type="text"
      placeholder="enter food item here !"
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default Foodinput;
