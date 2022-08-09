import React from 'react'
import styles from './Main.module.scss'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-awesome-reveal'
import { Background } from './Background/Background'
import { ParticlesComponent } from './Particles'
import portfolioIcon from "./../assets/images/portfolio.svg"


type PropsType = {
    theme: string | undefined
}

export const Main: React.FC<PropsType> = ({ theme }) => {
    return (
        <div id='main' className={styles.mainBlock}>
            <Background />
            <ParticlesComponent theme={theme} />
            <div className={styles.container}>
                <Fade direction='left' >
                    <div className={styles.greeting}>
                        <span style={{ fontSize: '16px' }} >
                            Welcome to me Portolio
                            <img src={portfolioIcon} alt='' />
                        </span>
                        <span>I am Maksim <span>KaNDeRsKiy</span></span>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Technology Expert', 'JavaScript, TypeScript, React'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                                cursorClassName: '',
                                wrapperClassName: ''
                            }} />
                        <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                            Hello, I'm a frontend developer in love with my business
                            I have experience in creating SPA with React/Redux/TypeScript
                            and much more in my Skills in Projects.
                            I constantly strive to learn something new,
                            improve my skills and expand them with new technologies.
                            Open for your suggestions
                            <p /> My github: <b />
                            <a target="_blank" rel="noreferrer" href='https://github.com/Maks-KaNDeR1' >@Maks_KaNDeR</a>
                        </span>
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

