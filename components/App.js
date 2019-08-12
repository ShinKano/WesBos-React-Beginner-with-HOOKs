import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => {
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header />
            </div>
            <Order />
            <Inventory />
            
        </div>
    )
};

export default App;