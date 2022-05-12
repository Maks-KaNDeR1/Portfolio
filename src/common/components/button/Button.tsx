import React from 'react';
import style from './Button.module.scss';

type PropsType = {
    text: string
}

function Button(props: PropsType) {
    return (
        <a href="" className={style.btn}>{props.text}</a>
    );
}

export default Button;