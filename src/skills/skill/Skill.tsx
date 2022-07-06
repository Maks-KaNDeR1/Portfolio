import React from 'react';
import styles from './Skill.module.scss'
import { Icon } from '@iconify/react';

type PropsType = {
    title: string
    icon?: string
    description?: string
    logos?: string
}

export const Skill: React.FC<PropsType> = ({ title, icon, description, logos }) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <Icon className={styles.svg} width="55" color='#2c74cb' icon={logos ? logos : ''} />
                <img src={icon} alt='' />
            </div>
            <h3 className={styles.skillTitle}>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
}
