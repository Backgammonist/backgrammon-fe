export const ADD_TO_MATCHES = 'ADD_TO_MATCHES';
export const RESET_MATCH = 'RESET_MATCH';

export const resetMatch = () => ({type: RESET_MATCH})

export const addToMatches = currentMatch => ({
    type: ADD_TO_MATCHES,
    payload: [currentMatch]
})