import React from 'react'
import style from './Hire.module.scss'
import { Title } from '../common/components/title/Title'
import { Button } from '../common/components/button/Button'
import { Fade } from 'react-awesome-reveal'



type PropsType = {
    lang: string | undefined
}

export const Hire: React.FC<PropsType> = ({ lang }) => {
    return (
        <div className={style.hireBlock}>
            <Fade direction='up' triggerOnce={true}>
                {
                    lang === 'en' ?
                        <div className={style.container}>
                            <Title text={'I am available for Freelance'} />
                            <Button way={'https://t.me/Maks_KaNDeR'} text={'Hire me'} />
                        </div>
                        :
                        <div className={style.container}>
                            <Title text={'Я доступен для фриланса'} />
                            <Button way={'https://t.me/Maks_KaNDeR'} text={'Нанять меня'} />
                        </div>
                }
            </Fade>
        </div>
    )
}