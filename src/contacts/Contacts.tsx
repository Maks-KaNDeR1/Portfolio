import React from 'react';
import styles from './Contacts.module.scss';
import { Title } from "../common/components/title/Title";
import { Fade } from 'react-awesome-reveal';
import axios from 'axios';
import {FormEvent, useRef} from 'react';

export const Contacts = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const onSubmitSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post('https://nodejs-smtp-form.herokuapp.com/sendMessage', {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value
        })
    }
	
    return (
        <div id='contacts' className={styles.contactsBlock}>
            <Fade direction='up' triggerOnce={true} >
                <div className={styles.container}>
                    <Title text={"Contacts"} />
                    <form className={styles.form}>
                        <input type="text" className={styles.formArea} placeholder="Name"  ref={nameRef}/>
                        <input type="text" className={styles.formArea} placeholder="e-mail"  ref={emailRef}/>
                        <textarea className={styles.messageArea} placeholder="Message"  ref={messageRef}/>
                        <button type="submit" >Send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}