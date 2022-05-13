import React from 'react';
import styles from './Main.module.scss';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';

function Main() {

    return (
        
        <div id='main' className={styles.mainBlock}>

            {/* <Particles className={styles.particles} params={particlesOpt} /> */}
            <div  className={styles.container}>
            <Fade  direction='left' > 
                <div className={styles.greeting}>
                    <span style={{ fontSize: '16px'}} >Welcome to me Portolio</span>
                    <span>I am Maksim <span>KaNDeR</span></span>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Technology Expert' ,'React, Redux JS/TS'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 20,
                            cursorClassName: '',
                            wrapperClassName: '  '
                        }} />
                        <span style={{fontSize: '19px', width: '605px', marginTop: '25px'}} >
                        I’m a frontend developer who has a results-focused attitude to creating SPA,
                         using React(JS/TS), Redux. I would like to find project work and full-time employment in a
                          company with a modern approach to development and a collaborative team.


                        </span>
                </div>
                </Fade>
                <Fade  direction='right' >
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