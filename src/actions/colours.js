export const SET_CURRENT_COLOUR = 'SET_CURRENT_COLOUR';
export const CLEAR_CURRENT_COLOUR = 'CLEAR_CURRENT_COLOUR';
export const UNDO_SET_CURRENT_COLOUR = 'UNDO_SET_CURRENT_COLOUR';

export const setCurrentColour = colour => ({
        type: SET_CURRENT_COLOUR,
        colour
    });

export const clearCurrentColour = () => ({
        type: CLEAR_CURRENT_COLOUR
    });

export const undoSetCurrentColour = () => ({
        type: UNDO_SET_CURRENT_COLOUR
    });
