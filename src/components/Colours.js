import React from 'react';

export const Colours = (props) => {
    const colours = [ 'Red', 'Green', 'Blue' ];
    const { 
        setCurrentColour, 
        clearCurrentColour, 
        undoSetCurrentColour, 
        currentColour, 
        previousColours,
        theme 
    } = props;

    return (
        <div className={theme}>
            <button onClick={clearCurrentColour} className={theme}>Clear Current Colour</button>
            <button onClick={undoSetCurrentColour} className={theme}>Undo</button>
            <br />
            <h2>Current Colour: {currentColour}</h2>
            { colours.map((colour, i) => (<button className={theme} key={`${colour}-btn-${i}`} onClick={() => setCurrentColour(colour)}>{colour}</button>))}
            <br />
            { previousColours.map((colour, i) => (<span key={`${colour}-label-${i}`}>{colour}</span>)) }
        </div>
    )
}