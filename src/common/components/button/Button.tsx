import React from 'react'
import style from './Button.module.scss'

type PropsType = {
    text: string
    way: string
    disabled?: boolean
}

export const Button: React.FC<PropsType> = ({ text, way, disabled }) => {
    return (
        <>
            {
                !disabled ?
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={way}
                        className={style.btn}
                    >
                        {text}
                    </a>
                    :
                    <span className={style.btnDis}>
                        {text}
                    </span>
            }
        </>
    )
}
