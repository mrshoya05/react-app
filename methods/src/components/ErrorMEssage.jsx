import React from "react";

function ErrorMEssage({ items }) {
  return <div>{items.length === 0 && <h3>I am still hungary !</h3>}</div>;
}

export default ErrorMEssage;
