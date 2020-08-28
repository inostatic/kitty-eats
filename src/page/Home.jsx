import React from "react"
import {Card} from "../components/Card";
import {useSelector} from "react-redux";


export const Home = () => {

    const cards = useSelector(({cardsReducer}) => cardsReducer.cards)

    return (
        <>
            <div className="content__title">Ты сегодня покормил кота?</div>
            <div className="content__cards">
                {cards &&
                cards.map((item, index) => <Card key={index} {...item}/>)
                }
            </div>
        </>
    )
}

