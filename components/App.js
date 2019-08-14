import React, { useState } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

const App = () => {
    
    const [fishes, setFishes] = useState({});
    const [order, setOrder] = useState({});


    const addFish = (fish) => {
        // Make a copy of the current state.
        const copiedFish = {...fishes};
        // Add new fish to the copiedFish.
        copiedFish[`fish${Date.now()}`] = fish;
        // Replace the original state to the copiedFish.
        setFishes(copiedFish);
    };
 
    const loadSampleFishes = () => {
        setFishes(sampleFishes);
    };

    const addToOrder = (key) => {
        //1. Make a copy of order state.
        const copiedOrder = {...order};
        //2. Add to the order(if it doesn't exist) or Update the number of order.
        copiedOrder[key] = copiedOrder[key] + 1 || 1;
        //3. Call setState() and update the original
        setOrder(copiedOrder);
    };


    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
                <ul className="fishes">
                    {Object.keys(fishes).map(key => <Fish key={key} index={key} details={fishes[key]} addToOrder={addToOrder}/>)}
                </ul>
            </div>
            <Order fishes={fishes} order={order} />
            <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes}/>
        </div>
    )
};

export default App;