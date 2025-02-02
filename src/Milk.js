import React from 'react';
import './item.css';

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
        <div className="milk-container">
            <h1 className="milk-title">Milk Prices in Dunedin</h1>
            <ul className="milk-list">
                {milkPrices.map((milk, index) => (
                    <li key={index} className="milk-item">
                        <h2 className="milk-product">{milk.product}</h2>
                        <p className="milk-store">Store: {milk.store}</p>
                        <p className="milk-price-per-unit">Price per unit: {milk.price_per_unit}</p>
                        <p className="milk-unit-size">Unit size: {milk.unit_size}</p>
                        <p className="milk-price-per-liter">Price per liter: {milk.price_per_liter}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Milk;