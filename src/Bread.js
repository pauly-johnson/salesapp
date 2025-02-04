import React from 'react';
import './item.css';
import Item from './Item';
import data from './data.json';


const Bread = () => {
    return (
        <>
        <h1 className="bread-title">Bread Prices in Dunedin</h1>
        <div className="bread-container">
            {data.breadPrices.map((bread, index) => (
                <Item
                    key={index}
                    title={bread.product}
                    store={bread.store}
                    price={bread.price_nzd}
                    amount={bread.unit_size}
                    pricePer={bread.price_per_100g}
                    isLitre={false}
                />
            ))}
        </div>
        </>
    )
};

export default Bread;