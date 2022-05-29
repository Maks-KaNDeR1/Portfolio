import React from 'react';
import styles from './Skill.module.scss'


type PropsType = {
    title: string
    icon: string
    description?: string
}

export const Skill: React.FC<PropsType> = ({title, icon, description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={icon} alt="https://github.com/Maks-KaNDeR1"/>
            </div>
            <h3 className={styles.skillTitle}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
}
