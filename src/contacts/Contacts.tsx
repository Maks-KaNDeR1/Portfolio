import React from 'react';
import styles from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import { Fade } from 'react-awesome-reveal';


function Contacts() {
    return (
        <div id='contacts' className={styles.contactsBlock}>
            <Fade direction='up' triggerOnce={true} > 
            <div className={styles.container}>
                <Title text={"Contacts"}/>
                <form className={styles.form}>
                    <input type="text" className={styles.formArea} placeholder="Name"/>
                    <input type="text" className={styles.formArea} placeholder="e-mail"/>
                    <textarea className={styles.messageArea} placeholder="Message"/>
                    <button type="submit" >Send message</button>
                </form>
            </div>
            </Fade>
        </div>
    );
}

export default Contacts;