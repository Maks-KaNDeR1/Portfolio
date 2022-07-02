import React from 'react';
import styles from './Main.module.scss';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Background } from './Background/Background';
import { ParticlesComponent } from './Particles';


export const Main = () => {

    return (
        <div id='main' className={styles.mainBlock}>
            <Background />
            <ParticlesComponent />
            <div className={styles.container}>
                <Fade direction='left' >
                    <div className={styles.greeting}>
                        <span style={{ fontSize: '16px' }} >Welcome to me Portolio</span>
                        <span>I am Maksim <span>KaNDeR</span></span>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Technology Expert', 'React, Redux JS/TS'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                                cursorClassName: '',
                                wrapperClassName: ''
                            }} />
                        <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                            I'm a Frontend result-oriented developer when creating SPA applications,
                            using React (JS/TS), Redux.  Worked in a team.
                            Ambitious, capable, responsible. I am diligent in my work.
                            Of those who prefer free time to work, study, rather than entertainment and an empty time rate)
                            I'm pushing up and I'm not used to giving up,
                            I want to realize myself and become the best in my field. I would like to find project work and full-time employment in a
                            company with a modern approach to development and a collaborative team.
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
    );
}

