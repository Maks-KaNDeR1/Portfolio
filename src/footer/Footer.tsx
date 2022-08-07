import React from 'react'
import styles from './Footer.module.scss'
import telegramIcon from "../assets/images/telegram.svg"
import telegramliIcon from "../assets/images/telegramli.svg"
import likedinIcon from "./../assets/images/linkedin.svg"
import likedinlIcon from "./../assets/images/linkedinl.svg"
import vkIcon from "./../assets/images/vk.svg"
import vklIcon from "./../assets/images/vkl.svg"
import whatsappIcon from "./../assets/images/whatsapp.svg"
import { Title } from "../common/components/title/Title"
import { Fade } from 'react-awesome-reveal'
import { FaWhatsapp } from "react-icons/fa"
import { CopyingNumber } from './CopyingNumber'


type PropsType = {
    theme: string | undefined
}

export const Footer: React.FC<PropsType> = ({ theme }) => {

    const themeObj = theme === 'dark' ? false : true

    return (
        <div className={styles.footer}>
            <Fade delay={300} >
                <div className={styles.container} >
                    <Title text={"Maksim Kanderskiy"} />
                    <CopyingNumber theme={theme} />
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://t.me/Maks_KaNDeR">
                                {
                                    themeObj ? <img src={telegramIcon} alt="" />
                                        : <img src={telegramliIcon} alt="" />
                                }
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=9181995810&Write%me">
                                {
                                    themeObj ? <FaWhatsapp style={{ width: '35px', height: '35px', marginTop: '-3px', color: '#fff' }} />
                                        : <img src={whatsappIcon} alt="" />
                                }
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maksim-kandersky-513668234/">
                                {
                                    themeObj ? <img src={likedinIcon} alt="" />
                                        : <img src={likedinlIcon} alt="" />
                                }
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://vk.com/maks_kander">
                                {
                                    themeObj ? <img src={vkIcon} alt="" />
                                        : <img src={vklIcon} alt="" />
                                }
                            </a>
                        </div>
                    </div>
                    <span className={styles.copyright}>2022 All Rights Reserved.</span>
                </div>
            </Fade>
        </div>
    )
}

