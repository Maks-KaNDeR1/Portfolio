import React from 'react'
import style from './Hire.module.scss'
import { Title } from '../common/components/title/Title'
import { Button } from '../common/components/button/Button'
import { Fade } from 'react-awesome-reveal'



type PropsType = {
    lang?: string
}

export const Hire: React.FC<PropsType> = ({ lang }) => {
    return (
        <div className={style.hireBlock}>
            <Fade direction='up' triggerOnce={true}>
                <div className={style.container}>
                    <Title text={
                        lang === 'en'
                            ? 'I am available for Freelance'
                            : 'Я доступен для фриланса'
                    }
                    />
                    <Button way={'https://t.me/Maks_KaNDeR'}
                        text={lang === 'en' ? 'Hire me' : 'Нанять меня'}
                    />
                </div>
            </Fade>
        </div>
    )
}