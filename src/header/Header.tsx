import React from 'react'
import styles from './Header.module.scss'
import { LangRoot } from '../language/langRoot/LangRoot'
import { ThemeRoot } from '../theme/themeRoot/ThemeRoot'
import { Nav } from './nav/Nav'

type PropsType = {
    lang?: string
}

export const Header: React.FC<PropsType> = ({ lang }) => {
    return (
        <div className={styles.header}>
            <ThemeRoot />
            <LangRoot />
            <Nav lang={lang} />
        </div>
    )
}