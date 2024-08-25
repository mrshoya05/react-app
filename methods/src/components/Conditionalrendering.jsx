import React, { useState } from "react";
import Items from "./Items";

function Conditionalrendering({ items }) {
  let [active, setActive] = useState([]);

  let onByButton = (items, event) => {
    let newItems = [...active, items];
    setActive(newItems);
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            foodItems={item}
            bought={active.includes(item)}
            handleBuyButtonClick={(event) => onByButton(item, event)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Conditionalrendering;
