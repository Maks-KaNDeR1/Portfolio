import React from 'react';
import styles from './Skills.module.scss';
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/title/Title";
import htmlIcon from "./../assets/images/html-icon.svg";
import formikIcon from "./../assets/images/formik.svg";
import ajaxIcon from "./../assets/images/AJAX.svg";
import websocketIcon from "./../assets/images/websocket.svg";
import { Fade } from 'react-awesome-reveal';

export const Skills = () => {
       let html = htmlIcon;
       let formik = formikIcon;
       let ajax = ajaxIcon;
       let websocket = websocketIcon;


       return (
              <div id='skills' className={styles.skillsBlock}>
                     <Fade direction='up' triggerOnce={true} >
                            <div className={styles.container}>
                                   <Title text={"Skills"} />
                                   <div className={styles.skills}>
                                          <Skill title={"html & Css"}
                                                 description={"css-modules, styled-component"}
                                                 icon={html}
                                          />
                                          <Skill title={"Javascript"}
                                                 logos={"bi:filetype-js"}
                                          />
                                          <Skill title={"TypeScript"}
                                                 logos={"ph:file-ts-duotone"}
                                          />
                                          <Skill title={"React"}
                                                 logos={"bxl:react"}
                                                 description={"React-Hook's"}
                                          />
                                          <Skill title={"Redux"}
                                                 logos={"bxl:redux"}
                                                 description={"Redux-Hook's, Redux-Thunk, Redux-Toolkit, Redux-Saga"}
                                          />
                                          <Skill title={"rest api"}
                                                 logos={"dashicons:rest-api"}
                                          />
                                          <Skill title={"axios"}
                                                 description={"Axios"}
                                                 icon={ajax}
                                          />
                                          <Skill title={"github"}
                                                 description={"Maks-KaNDeR1"}
                                                 logos={"bxl:github"}
                                          />
                                          <Skill title={"sass/scss"}
                                                 logos={"bxl:sass"}
                                          />
                                          <Skill title={"TDD"}
                                                 logos={"file-icons:test-react"}
                                          />
                                          <Skill title={"storybook"}
                                                 logos={"cib:storybook"}
                                          />
                                          <Skill title={"figma"}
                                                 logos={"akar-icons:figma-fill"}
                                          // logos={"logos:figma"}
                                          />
                                          <Skill title={"formik"}
                                                 icon={formik}
                                          />
                                          <Skill title={"material-ui"}
                                                 logos={"mdi:material-ui"}
                                          />
                                          <Skill title={"websocket"}
                                                 icon={websocket}
                                          />
                                          <Skill title={"Next.js"}
                                                 logos={"teenyicons:nextjs-outline"}
                                          />
                                          <Skill title={"webpack"}
                                                 // logos={"file-icons:webpack-old"}
                                                 logos={"logos:webpack"}
                                          />
                                          <Skill title={"node-js"}
                                                 logos={"bxl:nodejs"}
                                          />
                                          <Skill title={"mongodb"}
                                                 logos={"simple-icons:mongodb"}
                                          />
                                   </div>
                            </div>
                     </Fade>
              </div>
       );
}