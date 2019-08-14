import React from 'react';
import { formatPrice } from '../helpers';



const Order = (props) => {

    const renderOrder = (key) => {
        const fish = props.fishes[key];
        const count = props.order[key];
        const isAvalable = fish && fish.status === 'available';
        if (!isAvalable) {
            return <li key={key}>
                <li>Sorry {fish ? fish.name : 'fish'} is not available...</li>
        </li>;
        }
        return <li key={key}>
            {count} kg {fish.name}
            {formatPrice(count * fish.price)}
        </li>;
    };

    const orderIds = Object.keys(props.order);
    //reduce()は配列データの各要素を累積して1つの値にする用途に最適なメソッド
    const total = orderIds.reduce((prevTotal, key) => {
        const fish = props.fishes[key];
        const count = props.order[key];
        const isAvalable = fish && fish.status === 'available';
        if (isAvalable) {
            return prevTotal + (count * fish.price);
        }
        return prevTotal;
    }, 0);

    return (
        <div className="order-wrap">
            <h2>order</h2>
            <ul className="order">{orderIds.map(renderOrder)}</ul>
        
            <div className="total">
                <strong>Total: {formatPrice(total)}</strong>
            </div>
        </div>
        
    )

};

export default Order;