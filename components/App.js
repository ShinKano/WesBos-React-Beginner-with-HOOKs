import React, { useState, useEffect } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

const App = (props) => {
    
    const [fishes, setFishes] = useState({});
    const [order, setOrder] = useState({});

    const { params } = props.match;

    //define a function here and use that in the component instead of setFishes directly
    const mySetFishes = ({ fishes }) => setFishes({ ...fishes });
    useEffect(() => {
        const ref = base.syncState(`${params.storeId}/fishes`, {
            context: {
                setState: mySetFishes, //<-- pass it in here
                state: { fishes },
            },
            state: 'fishes',
        })
        return () => {
            base.removeBinding(ref);
        }
        //pushするのはaddFish()で行う
    }, []);

    const addFish = (fish) => {
        // Make a copy of the current state.
        const copiedFish = {...fishes};
        // Add new fish to the copiedFish.
        copiedFish[`fish${Date.now()}`] = fish;
        // Replace the original state to the copiedFish.
        setFishes(copiedFish);
        console.log("HookとFirebaseをつかうためのコードがうごきました");
        base.post(`${params.storeId}/fishes`, {
            data: fishes,
        });
    };

    const updateFish = (key, updatedFish) => {
        // Make a copy of the current state.
        const copiedFish = {...fishes};
        //  Update that state.
        copiedFish[key] = updatedFish;
        // setState()
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
            <Inventory 
                addFish={addFish}
                loadSampleFishes={loadSampleFishes}
                fishes={fishes} 
                updateFish={updateFish}
            />
        </div>
    )
};

export default App;