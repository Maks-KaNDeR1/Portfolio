import React from 'react'
import styles from './Contacts.module.scss'
import { Title } from "../common/components/title/Title"
import { Fade } from 'react-awesome-reveal'
import axios from 'axios'
import { FormEvent, useRef } from 'react'



type PropsType = {
    theme: string | undefined
}

export const Contacts: React.FC<PropsType> = ({ theme }) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const onSubmitSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.get('http://localhost:5000/').then(res => console.log(res))
        // axios.post('https://git.heroku.com/smtp-nodejs-server-of.git/sendMessage', {
        axios.post('http://localhost:5000/sendMessage', {
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
                    <form className={styles.form} onSubmit={onSubmitSendMessage} >
                        <input type="text" placeholder="Name" className={styles.input} ref={nameRef} />
                        <input type="text" placeholder="E-mail" className={styles.input} ref={emailRef} />
                        <textarea placeholder="Your  message" className={styles.area} ref={messageRef} />
                        <button type="submit" >Send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    )
}