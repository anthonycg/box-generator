import React from 'react';
import { useState } from 'react';

const BoxGen = (props) => {
    const [userColor, setUserColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log('userColor:' + '"' + userColor + '"');
        <div style={squareStyle}></div>;
        
    }
    
    const squareStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: {userColor}
    }


    return (
        <form onSubmit={ handleSubmit }>
            <label>Color</label>
            <input
            onChange={ (e) => setUserColor(e.target.value)}
            value={ userColor }
            ></input>
            <button type="submit">Add</button>
            <div>{handleSubmit}</div>
        </form>



    )
}

export default BoxGen;