import React from 'react';
import './item.css';
import Item from './Item';

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
        <>
        <h1 className="bread-title">Bread Prices in Dunedin</h1>
        <div className="bread-container">
            {breadPrices.map((bread, index) => (
                <Item
                    key={index}
                    title={bread.product}
                    store={bread.store}
                    price={bread.price_nzd}
                    amount={bread.unit_size}
                    pricePerLitre={bread.price_per_100g}
                />
            ))}
        </div>
        </>
    )
};

export default Bread;