import React from 'react';
import styles from './Skill.module.scss'


type PropsType = {
    title: string
    icon: string
}

function Skill(props: PropsType) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            {/* <span className={styles.description}>{props.description}</span> */}
        </div>
    );
}

export default Skill;