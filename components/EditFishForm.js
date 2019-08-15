import React, { useState, useEffect } from 'react';

const EditFishForm = (props) => {

    const handleChange = (event) => {
        console.log(event.currentTarget.name);
        //1. Take a copy and update it.
        const updatedFish = {
            ...props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        //2. Marge it to the original state
        props.updateFish(props.index, updatedFish)
    };

    return (
        <div className="fish-edit">
            <input
                name="name" type="text"
                value={props.fish.name}
                onChange={handleChange}
            />
            
            <input
                name="price" type="text"
                value={props.fish.price}
                onChange={handleChange}
            />

            <select
                name="status"
                value={props.fish.status}
                onChange={handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
            </select>

            <textarea
                name="desc"
                value={props.fish.desc}
                onChange={handleChange}
            />

            <input
                name="image" type="text"
                value={props.fish.image}
                onChange={handleChange}
            />

        </div>

    );
};

export default EditFishForm;