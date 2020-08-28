import React, {useState} from "react"
import cat from '../assets/images/cat.png'
import classNames from 'classnames'


export const Card = ({taste, count, countMouse, weight, availability, description}) => {
    const [before, after] = ['Сказочное заморское яство', 'Котэ не одобряет?']
    const [select, setSelect] = useState(false)
    const [text, setText] = useState(before)

    const selectCard = () => {
        if (select) {
            setText(before)
        }
        if (availability) {
            setSelect(!select)
        }
    }

    const changeText = () => {
        if (select) {
            setText(after)
        }
    }
    return (
        <div className="cards__container">
            <div className={classNames({
                'cards__item': true,
                'card-disabled': !availability,
                'card-selected': select && availability
            })}
                 onMouseLeave={changeText}
                 onClick={selectCard}
            >
                <div className="item-top">
                    <div className="item-top__corner"></div>
                    <div className="item-top__corner-before"></div>
                    <div className="item-top__rect">
                        <div className={text === after ? 'rect__select' : ''}>{text}</div>
                    </div>
                </div>
                <div className="item-middle">
                    <div className="item-middle__title">Нямушка</div>
                    <div className="item-middle__taste">{taste}</div>
                    <ul className="item-middle__ul">
                        <li>{count}</li>
                        <li>{countMouse}</li>
                    </ul>
                    <img className="item-middle__img" src={cat} alt="#"></img>
                    <div className="item-middle__circle">
                        <div className="circle__num">{weight}</div>
                        <div className="circle__unit">кг</div>
                    </div>
                </div>
            </div>
            <div className={availability ? 'card__footer' : 'card__footer footer-disabled'}>
                {
                    !availability ? `Печалька, ${taste} закончился.`
                        : availability && !select ? `Чего сидишь? Порадуй котэ, `
                        : availability && select ? description
                            : null
                }
                <span onClick={selectCard}>{availability && !select ? 'купи.' : ''}</span>
            </div>
        </div>
    )

}
