import React from 'react';
import styles from './Project.module.scss';
import { Button } from "../../common/components/button/Button";
import { Fade } from 'react-awesome-reveal';

type PropsType = {
    style: any
    title: string
    description: string
    way: string
    gitWay: string
    icon?: string
    notPagesIo?: boolean
}


export const Project: React.FC<PropsType> = ({ style, title, way, gitWay, description, icon, notPagesIo }) => {
    return (
        <div className={styles.project}>
            <Fade delay={300} >
                <div className={styles.image} style={style}>
                    <Button disabled={notPagesIo} way={`https://maks-kander1.github.io/${way}/`} text={"view"} />
                </div>
                <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{title} {icon && <img src={icon} alt="" />}</h3>
                    <a target="_blank" rel="noreferrer" href={`https://github.com/Maks-KaNDeR1/${gitWay}`}>https://github.com/Maks-KaNDeR1/{gitWay}</a>
                    <br />
                    <span className={styles.description}>{description}</span>
                </div>
            </Fade>
        </div>
    );
}

export default Project;