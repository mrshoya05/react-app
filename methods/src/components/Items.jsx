import React from "react";
import styles from "./Items.module.css";

function Items({ foodItems }) {
  const handleBuyButtonClick = (e) => {
    console.log(e);

    console.log(`${foodItems} being bought !`);
  };

  return (
    <>
      <li className={`${styles["kg-items"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItems}</span>
        <button
          className={`${styles.btnCustom} btn btn-info`}
          onClick={(e) => handleBuyButtonClick(e)}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Items;
