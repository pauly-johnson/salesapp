import React from "react";
import "./item.css";
import Item from "./Item";
import data from "./data.json";


const Milk = () => {
  return (
    <>
      <h1 className="milk-title">Milk Prices in Dunedin</h1>

      {data.milkPrices.map((milk, index) => (
        <Item
          key={index}
          title={milk.product}
          store={milk.store}
          price={milk.price_per_unit}
          amount={milk.unit_size}
          pricePer={milk.price_per_liter}
          isLitre={true}
        />
      ))}
    </>
  );
};

export default Milk;
