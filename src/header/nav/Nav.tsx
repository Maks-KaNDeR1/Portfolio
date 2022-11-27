import React from 'react'
import style from './Nav.module.scss'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-scroll'

type PropsType = {
    lang?: string
}

export const Nav: React.FC<PropsType> = ({ lang }) => {
    return (
        <div className={style.nav}>
            <Fade style={{}} direction='right' triggerOnce={true} >
                <Link
                    activeClass={style.active}
                    to='main'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > {lang === 'en' ? 'Main' : 'Главная'}</Link>
                <Link
                    activeClass={style.active}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > {lang === 'en' ? 'Skills' : 'Скиллы'}</Link>
                <Link
                    activeClass={style.active}
                    to='project'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > {lang === 'en' ? 'Project' : 'Проекты'}</Link>
                <Link
                    activeClass={style.active}
                    to='contacts'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                > {lang === 'en' ? 'Contacts' : 'Контакты'}</Link>
            </Fade>
        </div>
    )
}
