import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg'
import socialImage from './../assets/images/social-network.jpg'
import counterImage from './../assets/images/counter.png'
import chatImage from './../assets/images/chat-firebase.png'
import { Fade } from 'react-awesome-reveal';





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
    const homeworks = {
        backgroundImage: `url(dgfdh)`,
    };


    return (
        <div id='project' className={style.projectsBlock}>
                    <Fade direction='up' triggerOnce={true} >
            <div className={style.container} >
                <Fade direction='up' triggerOnce={true} >
                    <Title text={"Projects"} />
                </Fade>
                <div className={style.projects}>
                        <Project way={'TypeScript-Social-Network'} style={social} title={"Social network"}
                            description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."} />
                        <Project way={'todolist'} style={todolist} title={"Todo list"}
                            description={"ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit, "} />
                        <Project way={'Counter'} style={counter} title={"Counter"}
                            description={"Lorem ipsum dolor sipsum dolor sit ametipsum dolor sit ametit amet, consectetur adipisicing elit, "} />
                        <Project way={'chat-firebase'} style={chat} title={"Chat Firebase"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "} />
                        <Project way={'Homeworks'} style={homeworks} title={"Works"}
                            description={"Lorem ipsum dolor sit amet, ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametconsectetur adipisicing elit, "} />
                </div>
            </div>
                            </Fade>
        </div>
    );
}

export default Projects;