import React from "react";
import styles from "./display.module.css";

const Display = ({ displayvalue }) => {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        name=""
        value={displayvalue}
        readOnly
      />
    </div>
  );
};

export default Display;
