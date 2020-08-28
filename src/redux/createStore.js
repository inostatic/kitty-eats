import {applyMiddleware, combineReducers, createStore} from "redux";
import {cardsReducer} from "./reducer/cardsReducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
