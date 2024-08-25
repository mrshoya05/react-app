import React from "react";
import styles from "./Items.module.css";

function Items({ foodItems, bought, handleBuyButtonClick }) {
  return (
    <>
      <li
        className={`${styles["kg-items"]} list-group-item ${
          bought && "active"
        }`}
      >
        <span className={styles["kg-span"]}>{foodItems}</span>
        <button
          className={`${styles.btnCustom} btn btn-info`}
          onClick={handleBuyButtonClick}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Items;
