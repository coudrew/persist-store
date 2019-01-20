import React from 'react';

export const Colours = (props) => {
    const colours = [ 'Red', 'Green', 'Blue' ];
    const { setCurrentColour, clearCurrentColour, undoSetCurrentColour, currentColour } = props;
    return (
        <div>
            <button onClick={clearCurrentColour}>Clear Current Colour</button>
            <button onClick={undoSetCurrentColour}>Undo</button>
            <br />
            <h2>Current Colour: ${currentColour}</h2>
            { colours.map(colour => (<button onClick={() => setCurrentColour(colour)}>{colour}</button>))}
        </div>
    )
}