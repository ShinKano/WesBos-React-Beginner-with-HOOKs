import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

const Inventory = (props) => {

    return (
        <div className="inventory">
            {Object.keys(props.fishes).map( key=> (
                <EditFishForm 
                    key={key}
                    index={key}
                    fish={props.fishes[key]}
                    updateFish={props.updateFish}
            />))}
            <h2>Inventory</h2>
            <AddFishForm addFish={props.addFish} />
            <button onClick={props.loadSampleFishes}>Load Sample!</button>
        </div>
        
    )

};

export default Inventory;