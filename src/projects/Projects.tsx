import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg'
import socialImage from './../assets/images/social-network.jpg'
import counterImage from './../assets/images/counter.png'
import chatImage from './../assets/images/chat-firebase.png'





function Projects() {
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

    return (
        <div className={style.projectsBlock}>
            <div className={style.container} >
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"} description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Project style={todolist} title={"Todo list"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "}/>
                    <Project style={counter} title={"Counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "}/>
                    <Project style={chat} title={"Chat Firebase"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;