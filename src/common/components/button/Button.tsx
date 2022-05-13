import React from 'react';
import style from './Button.module.scss';

type PropsType = {
    text: string
    way: string
}

function Button(props: PropsType) {
    return (
        <a target="_blank" rel="noreferrer" href={props.way}
            className={style.btn}> {props.text}
        </a>
    );
}

export default Button;