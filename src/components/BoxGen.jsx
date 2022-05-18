import React from 'react';
import { useState } from 'react';

const BoxGen = (props) => {
    const [userColor, setUserColor] = useState("");
    const [colorArr, setColorArr] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log('userColor:' + '"' + userColor + '"');
        // create new object each time form is submitted
        const newBox = {
                color: userColor,
                size: 10
            }
        console.log(newBox);
        // add object to array
        const newArray = [...colorArr, newBox]
        console.log(newArray);
        // set array from state to our newly made array
        setColorArr(newArray);
        
        
    }
    
    const squareStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: userColor
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Color</label>
                <input
                onChange={ (e) => setUserColor(e.target.value)}
                value={ userColor }
                ></input>
                <button type="submit">Add</button>
                <div>{handleSubmit}</div>
    
            <h2>Boxes</h2>
            {colorArr.map((newBox, index) => {
                return (
                    <div style={squareStyle}>{newBox.color}</div>
                    )
                })}
            </form>

        </div>

    )
}

export default BoxGen;