import React, { useState } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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
 
    const loadSampleFishes = () => {
        setFishes(sampleFishes);
    };

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
                <ul className="fishes">
                    {Object.keys(fishes).map(key => <Fish key={key} details={fishes[key]} />)}
                </ul>
            </div>
            <Order />
            <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes}/>
        </div>
    )
};

export default App;