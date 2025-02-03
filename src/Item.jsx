import React from 'react';
import './item.css';

const Item = ({ title, store, price, amount, pricePerLitre }) => {
    return (
        <div className="item-container">
            <h2 className="item-title">{title}</h2>
            <p className="item-store">Store: {store}</p>
            <p className="item-price">Price: ${price}</p>
            <p className="item-amount">Amount: {amount}</p>
            <p className="item-price-per-litre">Price per Litre: ${pricePerLitre}</p>
            <button className="item-button">Buy</button>
        </div>
    );
};

export default Item;
