import React from 'react';
import style from './Hire.module.scss';
import { Title } from "../common/components/title/Title";
import { Button } from "../common/components/button/Button";
import { Fade } from 'react-awesome-reveal';



export const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <Fade direction='up' triggerOnce={true} >
                <div className={style.container} >
                    <Title text={"I am available for Freelance"} />
                    <Button way={'https://t.me/Maks_KaNDeR'} text={"Hire me"} />
                </div>
            </Fade>
        </div>
    );
}