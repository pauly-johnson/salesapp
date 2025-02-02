import React from 'react';

const milkPrices = [
    {
        "store": "PAK'nSAVE",
        "product": "Pams Value Standard Milk",
        "price_per_unit": 4.00,
        "unit_size": "2L",
        "price_per_liter": 2.00
    },
    {
        "store": "PAK'nSAVE",
        "product": "Anchor Blue Milk",
        "price_per_unit": 5.14,
        "unit_size": "2L",
        "price_per_liter": 2.57
    },
    {
        "store": "New World",
        "product": "Anchor Blue Milk",
        "price_per_unit": 8.09,
        "unit_size": "3L",
        "price_per_liter": 2.70
    },
    {
        "store": "New World",
        "product": "Simply Milk Standard Milk",
        "price_per_unit": 4.90,
        "unit_size": "2L",
        "price_per_liter": 2.45
    },
    {
        "store": "FreshChoice Green Island",
        "product": "Dairy Dale Milk Blue",
        "price_per_unit": 4.09,
        "unit_size": "2L",
        "price_per_liter": 2.04
    },
    {
        "store": "FreshChoice Green Island",
        "product": "WW Milk Standard",
        "price_per_unit": 5.99,
        "unit_size": "3L",
        "price_per_liter": 2.00
    },
    {
        "store": "Countdown",
        "product": "Essentials Standard Milk",
        "price_per_unit": 5.69,
        "unit_size": "3L",
        "price_per_liter": 1.90
    },
    {
        "store": "Dunedin Milk and More Ltd",
        "product": "Fresh Milk Delivery",
        "price_per_unit": "Varies",
        "unit_size": "Varies",
        "price_per_liter": "Varies"
    }
];

const Milk = () => {
    return (
        <div>
            <h1>Milk Prices in Dunedin</h1>
            <ul>
                {milkPrices.map((milk, index) => (
                    <li key={index}>
                        <h2>{milk.product}</h2>
                        <p>Store: {milk.store}</p>
                        <p>Price per unit: {milk.price_per_unit}</p>
                        <p>Unit size: {milk.unit_size}</p>
                        <p>Price per liter: {milk.price_per_liter}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Milk;