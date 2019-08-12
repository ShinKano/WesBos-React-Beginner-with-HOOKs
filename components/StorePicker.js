import React from 'react';
import { getFunName} from '../helpers';

const StorePicker = () => {
    return (
        <form action="" className="store-selector">
            <h2>Please Enter A Store</h2>
            <input type="text" placeholder="Store Name" defaultValue={getFunName()}/>
            <button　type="submit">Visit Store →</button>
        </form>
        
    )
};

export default StorePicker;