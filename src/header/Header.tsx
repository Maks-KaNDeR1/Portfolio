import React from 'react';
import { ThemeRoot } from '../theme/themeRoot/ThemeRoot';
import styles from './Header.module.scss';
import { Nav } from "./nav/Nav";


export const Header = () => {
    return (
        <div className={styles.header}>
            <ThemeRoot />
            <Nav />
        </div>
    );
}