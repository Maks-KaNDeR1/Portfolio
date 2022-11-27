import React from 'react';
import styles from './Project.module.scss';
import { Button } from '../../common/components/button/Button';
import { Fade } from 'react-awesome-reveal';

type PropsType = {
    style?: any
    videos?: any
    title: string
    description: string
    descriptionStack?: string
    way: string
    gitWay: string
    icon?: string
    height?: number
    notPagesIo?: boolean
    lang?: string
}

export const Project: React.FC<PropsType> = (
    {
        style,
        videos,
        title,
        way,
        gitWay,
        description,
        descriptionStack,
        icon,
        height,
        notPagesIo,
        lang
    }
) => {
    return (
        <div className={styles.project}>
            <Fade delay={300}>
                {
                    videos ?
                        <div>
                            <video className={styles.video} autoPlay loop muted>
                                <source src={videos} type='video/mp4' />
                            </video>
                            <div className={styles.image} style={{ height: `${height}px` }} >
                                <Button
                                    disabled={notPagesIo}
                                    way={`https://maks-kander1.github.io/${way}/`}
                                    text={lang === 'en' ? 'view' : 'смотреть'}
                                />
                            </div>
                        </div>
                        : <div className={styles.image} style={style}>
                            <Button
                                disabled={notPagesIo}
                                way={`https://maks-kander1.github.io/${way}/`}
                                text={lang === 'en' ? 'view' : 'смотреть'}
                            />
                        </div>
                }
                <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{title} {icon && <img src={icon} alt='' />}</h3>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href={`https://github.com/Maks-KaNDeR1/${gitWay}`}
                    >
                        https://github.com/Maks-KaNDeR1/{gitWay}
                    </a>
                    <br />
                    <span className={styles.description}>{description}</span>
                    <div>
                        {
                            descriptionStack &&
                            <span
                                className={styles.description}>
                                {lang === 'en' ? 'Stack:' : 'Стэк:'}
                                {descriptionStack}
                            </span>
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Project;