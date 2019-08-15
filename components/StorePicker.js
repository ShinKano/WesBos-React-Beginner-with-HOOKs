import React from 'react';
import { getFunName } from '../helpers';

const StorePicker = (props) => {

    const myInput = React.createRef();
    const goToStore = (event) => {
        // 1. Stop the form from submitting.
        event.preventDefault();
        // 2. Get the text from the input.
        const storeName = myInput['current'].value;
        // 3. Change the page to the store according to the input value.
        props.history.push(`/store/${storeName}`);
    };

    return (
        <form action="" className="store-selector" onSubmit={goToStore}>
            <h2>Please Enter A Store</h2>
            <input  type="text" 
                    ref={myInput}
                    placeholder="Store Name"
                    defaultValue={getFunName()}
            />
            <button type="submit">Visit Store →</button>
        </form>
    );
};

export default StorePicker;