import React from 'react';

const AddFishForm = (props) => {

    const nameRef = React.createRef();
    const priceRef = React.createRef();
    const statusRef = React.createRef();
    const descRef = React.createRef();
    const imageRef = React.createRef();

    const createFish = (event) => {
        // 1. stop the form for submitting.
        event.preventDefault();

        const fish = {
            name   : nameRef['current'].value,
            price  : parseFloat(priceRef['current'].value),
            status : statusRef['current'].value,
            desc   : descRef['current'].value,
            image  : imageRef['current'].value,
        };

        props.addFish();
    }; 

    return (
        <form className="fish-edit" onSubmit={createFish}>
            <input name="name" ref={nameRef} type="text" placeholder="name"/>
            <input name="price" ref={priceRef} type="text" placeholder="price"/>
            <select name="status" ref={statusRef}>
                <option value="available">Fresh!</option>
                <option value="anavailable">Sold Out!</option>
            </select>

            <textarea name="desc" ref={descRef} placeholder="desc"/>
            <input name="image" ref={imageRef} type="text" placeholder="image"/>
            <button type="submit">+ Add Fish</button>
        </form>
    )
};

export default AddFishForm;