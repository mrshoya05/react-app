import React from "react";
import styles from "../input.module.css";

const Foodinput = ({ handleOnchange }) => {
  return (
    <input
      className={styles.Foodinput}
      type="text"
      placeholder="enter food item here !"
      onChange={handleOnchange}
    />
  );
};

export default Foodinput;
