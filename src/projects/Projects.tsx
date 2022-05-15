import React from 'react';
import style from './Projects.module.scss';
import { Project } from './project/Project';
import { Title } from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg'
import socialImage from './../assets/images/social-network.jpg'
import counterImage from './../assets/images/counter.png'
import chatImage from './../assets/images/chat-firebase.png'
import firebaseIcon from './../assets/images/firebase.svg'
import { Fade } from 'react-awesome-reveal';



export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    const chat = {
        backgroundImage: `url(${chatImage})`,
    };
    const homeworks = {
        backgroundImage: `url(dgfdh)`,
    };

    let firebase = firebaseIcon;


    let descriptionNetwork = ('Social network. Stack Technology: React, Redux, redux-thunk, redux-hooks, REST API Axios, DAL ,Formik,High Order Component(hoc) context API, Router, Class components, selectors(reselect), test. And much more...')
    let descriptionTodo = ('Huge project - Todo list with storage of data on remote server. Technology stack: React, Redux (Redux-thunk, Redux-toolkit, Hooks), REST API, Storybook, Unit and snapshot tests. Formik, Material-UI. And much more... ')
    let descriptionCounter = ('Just simple counter with settings start value and end value. I used in this project React, Redux, clean CSS, React-router-dom and more"')
    let descriptionFirebase = ('Simple chat on React and Firebase. Login via google and email. Hooks, CSS')
    let descriptionWorks = ('Lorem ipsum dolor sit amet, ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametconsectetur adipisicing elit, ')


    return (
        <div id='project' className={style.projectsBlock}>
            <Fade direction='up' triggerOnce={true} >
                <div className={style.container} >
                    <Fade direction='up' triggerOnce={true} >
                        <Title text={"Projects"} />
                    </Fade>
                    <div className={style.projects}>
                        <Project way={'TypeScript-Social-Network'} style={social} title={"Social network"}
                            description={descriptionNetwork} />
                        <Project way={'todolist'} style={todolist} title={"Todo list"}
                            description={descriptionTodo} />
                        <Project way={'Counter'} style={counter} title={"Counter"}
                            description={descriptionCounter} />
                        <Project way={'chat-firebase'} style={chat} title={`Chat Firebase`} icon={firebase}
                            description={descriptionFirebase} />
                        <Project way={'Homeworks'} style={homeworks} title={"Works"}
                            description={descriptionWorks} />
                    </div>
                </div>
            </Fade>
        </div>
    );
}
