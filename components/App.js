import React, { useState } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => {
    
    const [fishes, setFishes] = useState({});
    const [order, setOrder] = useState(null);


    const addFish = (fish) => {
        // Make a copy of the current state.
        const copiedFish = {...fishes};
        // Add new fish to the copiedFish.
        copiedFish[`fish${Date.now()}`] = fish;
        // Replace the original state to the copiedFish.
        setFishes(copiedFish);
    };
 

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
            </div>
            <Order />
            <Inventory addFish={addFish}/>
        </div>
    )
};

export default App;