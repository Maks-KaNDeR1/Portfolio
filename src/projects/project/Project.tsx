import React from 'react';
import style from './Project.module.scss';
import { Button } from "../../common/components/button/Button";

type PropsType = {
    style: any
    title: string
    description: string
    way: string
    icon?: string
}


export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Button way={`https://maks-kander1.github.io/${props.way}/`} text={"view"} />
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title} {props.icon && <img src={props.icon} alt="" />}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;