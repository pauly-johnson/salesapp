import React from 'react';
import './item.css';

const Item = ({ title, store, price, amount, pricePer, isLitre }) => {
    return (
        <div className="item-container">
            <h2 className="item-title">{title}</h2>
            <p className="item-store">Store: {store}</p>
            <p className="item-price">Price: ${price}</p>
            <p className="item-amount">Amount: {amount}</p>
            {isLitre && <p className="item-price-per-litre">Price per Litre: ${pricePer}</p>}
            {!isLitre && <p className="item-price-per-100g">Price per 100g: ${pricePer}</p>}
            <button className="item-button">Buy</button>
        </div>
    );
};

export default Item;
