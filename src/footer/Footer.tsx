import React from 'react';
import styles from './Footer.module.scss';
import telegramIcon from "../assets/images/telegram.svg"
import likedinIcon from "./../assets/images/linkedin.svg"
import vkIcon from "./../assets/images/vk.svg"
import { Title } from "../common/components/title/Title";
import { Fade } from 'react-awesome-reveal';
import { FaWhatsapp } from "react-icons/fa";
import { CopyingNumber } from './CopyingNumber';



export const Footer = () => {
    return (
        <div className={styles.footer}>
             <Fade delay={300} >
                <div className={styles.container} >
                    <Title text={"Maksim Kandersky"} />
                    <CopyingNumber />
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://t.me/Maks_KaNDeR">
                                <img src={telegramIcon} alt="" />
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=9181995810&Write%me">
                                <FaWhatsapp style={{ width: '35px', height: '35px', marginTop: '-3px', color: '#fff' }} />
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maksim-kandersky-513668234/">
                                <img src={likedinIcon} alt="" />
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a target="_blank" rel="noreferrer" href="https://vk.com/maks_kander">
                                <img src={vkIcon} alt="" />
                            </a>
                        </div>
                    </div>
                    <span className={styles.copyright}>2022 All Rights Reserved.</span>
                </div>
            </Fade>
        </div>
    );
}

