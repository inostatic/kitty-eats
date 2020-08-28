import {GET_CARDS} from "../reducer/cardsReducer";
import {getDataCards} from "../../API/API";


export const fetchCards = () => (dispatch) => {
    getDataCards().then(response => {
        dispatch(getCardsAC(response))
    })
}



const getCardsAC = (payload) => ({type: GET_CARDS, payload})

