import React, {useEffect} from "react"
import './App.scss'
import {useDispatch} from "react-redux";
import {fetchCards} from "./redux/actions/cards";
import {Home} from "./page/Home";


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])


    return (
        <div className="app">
            <div className="app__content">
                <Home/>
            </div>
        </div>
    )
}

export default App