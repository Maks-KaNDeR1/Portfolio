import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";




function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;

    return (
        <div className={styles.skillsBlock}>
            <div className={styles.container}>
                <Title text={"Skills"}/>
                <div className={styles.skills}>
                    <Skill title={"Js"}
                           icon={js}
                           description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"html & Css"}
                           icon={html}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "}/>
                    <Skill title={"React"}
                           icon={react}
                           description={"ut labore et dolore magna aliqua Ut."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;