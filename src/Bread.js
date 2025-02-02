import React from 'react';
import './item.css';

const breadPrices = [
    {
        store: "Countdown",
        product: "Essentials White or Wheatmeal Bread",
        price_nzd: 1.25,
        unit_size: "600g",
        price_per_100g: 0.21
    },
    {
        store: "Countdown",
        product: "Tip Top Oatilicious Toast Bread",
        price_nzd: 3.30,
        unit_size: "700g",
        price_per_100g: 0.47
    },
    {
        store: "PAK'nSAVE",
        product: "Pams Value White Toast Fresh Sliced Bread",
        price_nzd: 1.15,
        unit_size: "600g",
        price_per_100g: 0.19
    },
    {
        store: "PAK'nSAVE",
        product: "Sunny Crust White Toast Bread",
        price_nzd: 1.99,
        unit_size: "600g",
        price_per_100g: 0.33
    },
    {
        store: "PAK'nSAVE",
        product: "Tip Top Supersoft White Super Thick Bread",
        price_nzd: 3.69,
        unit_size: "700g",
        price_per_100g: 0.53
    },
    {
        store: "PAK'nSAVE",
        product: "Vogel's Original Mixed Grain Toast Bread",
        price_nzd: 4.49,
        unit_size: "750g",
        price_per_100g: 0.60
    },
    {
        store: "New World",
        product: "Pams Value White Toast Fresh Sliced Bread",
        price_nzd: 1.19,
        unit_size: "600g",
        price_per_100g: 0.20
    },
    {
        store: "New World",
        product: "Tip Top Supersoft Honeygrain Toast Bread",
        price_nzd: 4.09,
        unit_size: "700g",
        price_per_100g: 0.58
    },
    {
        store: "New World",
        product: "Nature's Fresh Multigrain Toast Bread",
        price_nzd: 3.79,
        unit_size: "700g",
        price_per_100g: 0.54
    },
    {
        store: "New World",
        product: "Nature's Fresh White Sandwich Bread",
        price_nzd: 3.79,
        unit_size: "700g",
        price_per_100g: 0.54
    }
];

const Bread = () => {
    return (
        <div className="bread-list">
            {breadPrices.map((bread, index) => (
                <div key={index} className="bread-item">
                    <h3 className="bread-product">{bread.product}</h3>
                    <p className="bread-store">Store: {bread.store}</p>
                    <p className="bread-price">Price: ${bread.price_nzd.toFixed(2)} NZD</p>
                    <p className="bread-unit-size">Unit Size: {bread.unit_size}</p>
                    <p className="bread-price-per-100g">Price per 100g: ${bread.price_per_100g.toFixed(2)} NZD</p>
                </div>
            ))}
        </div>
    );
};

export default Bread;