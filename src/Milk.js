import React from "react";
import "./item.css";
import Item from "./Item";

const milkPrices = [
  {
    store: "PAK'nSAVE",
    product: "Pams Value Standard Milk",
    price_per_unit: 4.0,
    unit_size: "2L",
    price_per_liter: 2.0,
  },
  {
    store: "PAK'nSAVE",
    product: "Anchor Blue Milk",
    price_per_unit: 5.14,
    unit_size: "2L",
    price_per_liter: 2.57,
  },
  {
    store: "New World",
    product: "Anchor Blue Milk",
    price_per_unit: 8.09,
    unit_size: "3L",
    price_per_liter: 2.7,
  },
  {
    store: "New World",
    product: "Simply Milk Standard Milk",
    price_per_unit: 4.9,
    unit_size: "2L",
    price_per_liter: 2.45,
  },
  {
    store: "FreshChoice Green Island",
    product: "Dairy Dale Milk Blue",
    price_per_unit: 4.09,
    unit_size: "2L",
    price_per_liter: 2.04,
  },
  {
    store: "FreshChoice Green Island",
    product: "WW Milk Standard",
    price_per_unit: 5.99,
    unit_size: "3L",
    price_per_liter: 2.0,
  },
  {
    store: "Countdown",
    product: "Essentials Standard Milk",
    price_per_unit: 5.69,
    unit_size: "3L",
    price_per_liter: 1.9,
  },
];

const Milk = () => {
  return (
    <>
      <h1 className="milk-title">Milk Prices in Dunedin</h1>

      {milkPrices.map((milk, index) => (
        <Item
          key={index}
          title={milk.product}
          store={milk.store}
          price={milk.price_per_unit}
          amount={milk.unit_size}
          pricePerLitre={milk.price_per_liter}
        />
      ))}
    </>
  );
};

export default Milk;
