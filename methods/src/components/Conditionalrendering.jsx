import React from "react";
import Items from "./Items";

function Conditionalrendering({ items }) {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            foodItems={item}
            handleBuyButtonClick={() => console.log(`${item} bought !`)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Conditionalrendering;
