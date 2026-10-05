import React from 'react'
import styles from './Main.module.scss'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-awesome-reveal'
import { Background } from './Background/Background'
import { ParticlesComponent } from './Particles'
import portfolioIcon from './../assets/images/portfolio.svg'


type PropsType = {
    theme?: string
    lang?: string
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
                                lang === 'en' ? 'Welcome to me Portolio!' : 'Добро пожаловать ко мне в Портфолио'
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
                                strings: [lang === 'en' ? 'Frontend Developer' : 'Frontend Разработчик', 'Technology Expert', 'JavaScript, TypeScript, React'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                                cursorClassName: '',
                                wrapperClassName: ''
                            }} />
                        {
                            lang === 'en' ?
                                <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                                    A developer with an advanced level of JavaScript, TypeScript, React and Next.js,
with experience working with Binance, Bybit, Okx exchanges.
I specialize in creating both trading platforms and websites using React and Next.js technologies.
In my work, I actively use modern tools such as Redux Toolkit, WebSocket and others. I have experience working
with axios, klinecharts, nanostores, MUI and Ant Design, as well as with data visualization libraries such as recharts.
I also have skills in working with Canvas, server-side rendering (SSR) and SEO optimization, which allows me to create high-performance and accessible web applications.
I am ready to consider project work and full or part-time employment
                                    <p /> My github: <b />
                                    <a target='_blank' rel='noreferrer' href='https://github.com/Maks-KaNDeR1' >@Maks_KaNDeR</a>
                                </span>
                                :
                                <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                                    Разработчик с продвинутым уровнем владения JavaScript, TypeScript, React и Next.js, 
                                    обладающий опытом работы с биржами Binance, Bybit, Okx. 
                                    Специализируюсь на создании как трейдинговых платформ, так и веб-сайтов с использованием технологий React и Next.js. 
                                    В своей работе активно применяю современные инструменты, такие как Redux Toolkit, WebSocket и другие. Имею опыт работы 
                                    с axios, klinecharts, nanostores, MUI и Ant Design, а также с библиотеками визуализации данных, такими как recharts. 
                                    Также владею навыками работы с Canvas, серверного рендеринга (SSR) и SEO-оптимизации, что позволяет создавать высокопроизводительные и доступные веб-приложения.
                                    Готов рассмотреть проектную работу и полную или частичную занятость
                                    <p /> Мой github: <b />
                                    <a target='_blank' rel='noreferrer' href='https://github.com/Maks-KaNDeR1' >@Maks_KaNDeR</a>
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

