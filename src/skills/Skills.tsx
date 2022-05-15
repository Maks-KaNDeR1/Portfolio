import React from 'react';
import styles from './Skills.module.scss';
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/title/Title";
import gitIcon from "./../assets/images/git.svg";
import htmlIcon from "./../assets/images/html-icon.svg";
import jsIcon from "./../assets/images/js.svg";
import tsIcon from "./../assets/images/typescript.svg";
import reactIcon from "./../assets/images/react.svg";
import reduxIcon from "./../assets/images/redux.svg";
import formikIcon from "./../assets/images/formik.svg";
import uiIcon from "./../assets/images/material-ui.svg";
import sassIcon from "./../assets/images/sass.svg";
import restIcon from "./../assets/images/rest-api.svg";
import ajaxIcon from "./../assets/images/ajax.svg";
import testIcon from "./../assets/images/test.svg";
import storybookIcon from "./../assets/images/storybook.svg";
import figmaIcon from "./../assets/images/figma.svg";
import { Fade } from 'react-awesome-reveal';


export const Skills = () => {
       let git = gitIcon;
       let html = htmlIcon;
       let js = jsIcon;
       let ts = tsIcon;
       let react = reactIcon;
       let redux = reduxIcon;
       let ui = uiIcon;
       let formik = formikIcon;
       let sass = sassIcon;
       let test = testIcon;
       let storybook = storybookIcon;
       let rest = restIcon;
       let ajax = ajaxIcon;
       let figma = figmaIcon;

       return (
              <div id='skills' className={styles.skillsBlock}>
                     <Fade direction='up' triggerOnce={true} >
                            <div className={styles.container}>
                                   <Title text={"Skills"} />
                                   <div className={styles.skills}>
                                          <Skill title={"html & Css"}
                                                 icon={html} />
                                          <Skill title={"Javascript"}
                                                 icon={js} />
                                          <Skill title={"TypeScript"}
                                                 icon={ts} />
                                          <Skill title={"React"}
                                                 icon={react} 
                                                 description={"hook's"}
                                                 />
                                          <Skill title={"Redux"}
                                                 icon={redux} 
                                                 description={"hook's, redux-thunk, redux-toolkit"}
                                                 />
                                          <Skill title={"github"}
                                                 icon={git} />
                                          <Skill title={"formik"}
                                                 icon={formik} />
                                          <Skill title={"material-ui"}
                                                 icon={ui} />
                                          <Skill title={"sass/scss"}
                                                 icon={sass} />
                                          <Skill title={"TDD"}
                                                 icon={test} />
                                          <Skill title={"storybook"}
                                                 icon={storybook} />
                                          <Skill title={"rest api"}
                                                 icon={rest} />
                                          <Skill title={"ajax"}
                                                 icon={ajax} />
                                          <Skill title={"figma"}
                                                 icon={figma} />
                                   </div>
                            </div>
                     </Fade>
              </div>
       );
}