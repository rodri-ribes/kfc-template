import React from 'react'
import style from './CardOption.module.scss';

export default function CardOption({ title, content, price, img, button }) {
    return (
        <div className={style.container}>
            <div className={style.container__content}>
                <h3>{title}</h3>
                <p>{content}</p>
                <b>{price}</b>
                <button style={{ display: `${button ? "flex" : "none"}` }}>{button}</button>
            </div>
            <div className={style.container__img}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}
