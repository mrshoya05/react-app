import React from "react";
import styles from "./Items.module.css";

function Items({ foodItems }) {
  console.log(styles);

  return (
    <>
      <li className={`${styles["kg-items"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItems}</span>
      </li>
    </>
  );
}

export default Items;
