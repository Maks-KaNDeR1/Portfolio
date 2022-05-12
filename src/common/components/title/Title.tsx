import React from 'react';
import style from './Title.module.scss';

type PropsType = {
    text: string
}

function Title(props: PropsType) {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>

    );
}

export default Title;