import React from 'react';
import styles from './Main.module.scss';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import Particles from "react-tsparticles";
import Background from './Background';

function Main() {

    return (

        <div id='main' className={styles.mainBlock}>
            <Background /> 
            {/* <Particles className={styles.tsparticles} params={particlesOpt} /> */}
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
                                wrapperClassName: '  '
                            }} />
                        <span style={{ fontSize: '17px', maxWidth: '605px', marginTop: '25px' }} >
                            I'm a Frontend result-oriented developer when creating SPA applications,
                            using React (JS/TS), Redux.  Worked in a team.
                            I'm pushing up and I'm not used to giving up,
                            I want to realize myself and become the best in my field. I would like to find project work and full-time employment in a
                            company with a modern approach to development and a collaborative team.
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

export default Main;