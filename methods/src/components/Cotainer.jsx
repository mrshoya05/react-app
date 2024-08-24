import React from "react";
import styles from "../container.module.css";

function Cotainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default Cotainer;
