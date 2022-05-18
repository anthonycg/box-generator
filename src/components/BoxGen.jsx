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
        // clear out input after submit
        setUserColor("");
        
    }
    const layout = {
        display: "inline-block",
        margin: "10px",
        flexWrap: "wrap"
    }
    const squareStyle = {
        width: '150px',
        height: '150px',
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
                    <div style={layout}>
                        <div style={{backgroundColor: newBox.color, width: "150px", height: "150px", borderRadius: "10%"}}>{newBox.color}</div>
                    </div>
                    )
                })}
            </form>

        </div>

    )
}

export default BoxGen;