import React from 'react';
import { Fade } from 'react-awesome-reveal';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";


export const Nav = () => {
    return (
        <div className={style.nav}>
            <Fade style={{}} direction='right' triggerOnce={true} >
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > Main </Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > Skills </Link>
                <Link
                    activeClass={style.active}
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > Project </Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > Contacts </Link>
            </Fade>
        </div>
    );
}
