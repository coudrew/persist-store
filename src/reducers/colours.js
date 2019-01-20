import { 
    SET_CURRENT_COLOUR, 
    CLEAR_CURRENT_COLOUR, 
    UNDO_SET_CURRENT_COLOUR 
} from '../actions/colours';
import createSerialisedReducer from './createReducer';

export const storeKey = 'colours';
const INITIAL_STATE = {
    currentColour: '',
    previousColours: []
};
const SERIALISED_STATE = JSON.parse(sessionStorage.getItem(storeKey));

export const setCurrentColour = (state, action) => {
    const { colour } = action;
    const lastColour = state.currentColour;
    const { previousColours } = state;
    const nextColours = lastColour ? [ ...previousColours, lastColour ] : previousColours;
    return {
        ...state,
        currentColour: colour,
        previousColours: nextColours
    };
};

export const clearCurrentColour = (state, action) => {
    return {
        ...state,
        currentColour: null
    };
};

export const undoSetCurrentColour = (state, action) => {
    const { previousColours } = state;
    const lastColour = previousColours.pop();
    return {
        ...state,
        currentColour: lastColour,
        previousColours
    };
};

const handlers = {
    [SET_CURRENT_COLOUR]: setCurrentColour,
    [CLEAR_CURRENT_COLOUR]: clearCurrentColour,
    [UNDO_SET_CURRENT_COLOUR]: undoSetCurrentColour
};

const coloursReducer = createSerialisedReducer(SERIALISED_STATE || INITIAL_STATE, handlers, storeKey);
export default coloursReducer;