import React from 'react';
import { render } from 'react-dom';

const Header = () => {
    return (
        <header className="top">
            <h1>Catch
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>Flesh Seafood Market</span>
            </h3>
        </header>
        
    )

};

export default Header;