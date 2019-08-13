import React, { useState } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => {
    const [hidden, setHidden] = useState(true);
    //const [fishes, setFishes] = useState(null);
    // const [order, setOrder] = useState(null);

    const addFish = () => {
        console.log('meemme');
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