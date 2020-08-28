export const GET_CARDS = 'GET_CARDS'

let initialState = {
    cards: []
}

export const cardsReducer = (state = initialState, action) => {
    if (action.type === GET_CARDS) {
        return {
            ...state,
            cards: action.payload
        }
    }
    return state
}
