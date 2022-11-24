import React from 'react'
import styles from './Main.module.scss'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-awesome-reveal'
import { Background } from './Background/Background'
import { ParticlesComponent } from './Particles'
import portfolioIcon from "./../assets/images/portfolio.svg"


type PropsType = {
    theme: string | undefined
    lang: string | undefined
}

export const Main: React.FC<PropsType> = ({ theme, lang }) => {
    return (
        <div id='main' className={styles.mainBlock}>
            <Background />
            <ParticlesComponent theme={theme} />
            <div className={styles.container}>
                <Fade direction='left' >
                    <div className={styles.greeting}>
                        <span style={{ fontSize: '16px' }}>
                            {
                                lang === 'en' ? 'Welcome to me Portolio' : 'Добро пожаловать ко мне Портфолио'
                            }
                            <img src={portfolioIcon} alt='' />
                        </span>
                        {
                            lang === 'en' ?
                                <span>I am Maksim <span>KaNDeRsKiy</span></span>
                                :
                                <span>Максим <span>Кандерский</span></span>
                        }
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Technology Expert', 'JavaScript, TypeScript, React'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                                cursorClassName: '',
                                wrapperClassName: ''
                            }} />
                        {
                            lang === 'en' ?
                                <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                                    Hello, I'm an experienced Front-end developer!
                                    I create a SPA using the following technologies: JavaScript / TypeScript / React /
                                    Redux / Webpack and others.
                                    Now I am improving my skills in this direction and expanding them with new ones.
                                    In addition to these projects, there are also works on github. I am ready to consider
                                    project work and full employment.
                                    <p /> My github: <b />
                                    <a target="_blank" rel="noreferrer" href='https://github.com/Maks-KaNDeR1' >@Maks_KaNDeR</a>
                                </span>
                                :
                                <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                                    Здравствуйте, я опытный Front-end разработчик!
                                    Создаю SPA с использованием следующих технологий: JavaScript / TypeScript /
                                    React / Redux / Webpack и прочих...
                                    Сейчас совершенствую свои навыки в этом направлении и расширяю их
                                    новыми.
                                    По мимо указанных проектов есть еще работы на github.
                                    Готов рассмотреть проектную работу и полную занятость
                                    <p /> Мой github: <b />
                                    <a target="_blank" rel="noreferrer" href='https://github.com/Maks-KaNDeR1' >@Maks_KaNDeR</a>
                                </span>
                        }
                    </div>
                </Fade>
                <Fade direction='right' >
                    <div className={styles.photo}>
                        <div className={styles.image}>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

