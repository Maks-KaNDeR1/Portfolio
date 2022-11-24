import React from 'react'
import { LangsTypes, langs } from '../contexts/LangContext'
import styles from './Toggle.module.scss'

type PropsType = {
    value: LangsTypes
    onChange: (value: LangsTypes) => void
}

const Toggle: React.FC<PropsType> = ({ value, onChange }) => {

    return (
        <div className={styles.toggle} >
            <span
                className={value === 'ru' ? styles.active : ''}
                onClick={() => onChange(langs.ru)}
            >
                Ru
            </span>
            <span>
                /
            </span>
            <span
                className={value === 'en' ? styles.active : ''}
                onClick={() => onChange(langs.en)
                }>
                En
            </span>
        </div>
    )
}

export default Toggle
