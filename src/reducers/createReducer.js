export const SERIALISE_STATE = 'SERIALISE_STATE';

const createSerialisedReducer = (initialState, handlers, storeKey) => ({
    reducer: (state = initialState, action) => {
        const { type } = action;
        if (type === SERIALISE_STATE) {
            sessionStorage.setItem(storeKey, JSON.stringify(state));
        }
        if (type === '@@INIT') {
            sessionStorage.removeItem(storeKey);
        }
        return  handlers[type] ? handlers[type](state, action) : state;
    },
    storeKey
});

export default createSerialisedReducer;