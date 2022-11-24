import React from 'react'
import styles from './Skills.module.scss'
import { Skill } from './skill/Skill'
import { Title } from '../common/components/title/Title'
import htmlIcon from './../assets/images/html-icon.svg'
import codingIcon from './../assets/images/coding.svg'
import jslIcon from './../assets/images/jsl.svg'
import formikIcon from './../assets/images/formik.svg'
import figmaIcon from './../assets/images/figma.svg'
import materialcon from './../assets/images/material.svg'
import ajaxIcon from './../assets/images/AJAX.svg'
import websocketIcon from './../assets/images/websocket.svg'
import testIcon from './../assets/images/test.svg'
import nodeIcon from './../assets/images/node-js.svg'
import expresstIcon from './../assets/images/express.svg'
import mongoIcon from './../assets/images/mongo.svg'
import { Fade } from 'react-awesome-reveal'

type PropsType = {
       theme: string | undefined
       lang: string | undefined
}

export const Skills: React.FC<PropsType> = ({ theme, lang }) => {

       const html = htmlIcon
       const formik = formikIcon
       const ajax = ajaxIcon
       const websocket = websocketIcon
       const figma = figmaIcon
       const material = materialcon
       const jsl = jslIcon
       const coding = codingIcon
       const test = testIcon
       const node = nodeIcon
       const express = expresstIcon
       const mongo = mongoIcon

       const themeObj = theme === 'dark' ? false : true

       return (
              <div id='skills' className={styles.skillsBlock}>
                     <Fade direction='up' triggerOnce={true} >
                            <div className={styles.container}>
                                   {
                                          lang === 'en' ? <Title text={'Skills'} />
                                                 : <Title text={'Скиллы'} />
                                   }
                                   <div className={styles.skills}>
                                          <Skill
                                                 title={'html & Css'}
                                                 description={'БЭМ, css-modules, styled-component'}
                                                 icon={themeObj ? html : coding}
                                          // logos={themeObj ? '' : 'icon-park:file-code'}
                                          />
                                          <Skill
                                                 title={'Javascript'}
                                                 logos={themeObj ? 'bi:filetype-js' : ''}
                                                 icon={themeObj ? '' : jsl}
                                          />
                                          <Skill
                                                 title={'TypeScript'}
                                                 logos={themeObj ? 'ph:file-ts-duotone' : 'logos:typescript-icon-round'}
                                          />
                                          <Skill
                                                 title={'React'}
                                                 logos={themeObj ? 'bxl:react' : 'vscode-icons:file-type-reactjs'}
                                                 description={`React-Hook's`}
                                          />
                                          <Skill
                                                 title={'Redux'}
                                                 logos={themeObj ? 'bxl:redux' : 'logos:redux'}
                                                 description={`Redux-Hook's, Redux-Thunk, Redux-Toolkit, Redux-Saga`}
                                          />
                                          <Skill
                                                 title={'rest api'}
                                                 logos={themeObj ? 'dashicons:rest-api' : 'vscode-icons:file-type-rest'}
                                          />
                                          <Skill
                                                 title={'axios'}
                                                 description={'Axios'}
                                                 icon={ajax}
                                          />
                                          <Skill
                                                 title={'github'}
                                                 description={'Maks-KaNDeR1'}
                                                 logos={themeObj ? 'bxl:github' : 'logos:git-icon'}
                                          />
                                          <Skill
                                                 title={'sass/scss'}
                                                 logos={themeObj ? 'bxl:sass' : 'vscode-icons:file-type-scss2'}
                                          />
                                          <Skill
                                                 title={'TDD'}
                                                 logos={themeObj ? 'file-icons:test-react' : ''}
                                                 icon={themeObj ? '' : test}
                                          />
                                          <Skill
                                                 title={'storybook'}
                                                 logos={themeObj ? 'cib:storybook' : 'vscode-icons:file-type-storybook'}
                                          />
                                          <Skill
                                                 title={'formik'}
                                                 icon={formik}
                                          />
                                          <Skill
                                                 title={'material-ui'}
                                                 logos={themeObj ? 'mdi:material-ui' : ''}
                                                 icon={themeObj ? '' : material}
                                          />
                                          <Skill
                                                 title={'ant-design'}
                                                 logos={themeObj ? 'ant-design:ant-design-outlined' : 'logos:ant-design'}
                                          />
                                          <Skill
                                                 title={'websocket'}
                                                 logos={themeObj ? '' : 'logos:websocket'}
                                                 icon={themeObj ? websocket : ''}
                                          />
                                          <Skill
                                                 title={'figma'}
                                                 logos={themeObj ? 'akar-icons:figma-fill' : ''}
                                                 icon={themeObj ? '' : figma}
                                          />
                                          <Skill
                                                 title={'webpack'}
                                                 logos={themeObj ? 'file-icons:webpack-old' : 'logos:webpack'}
                                          />
                                          <Skill
                                                 title={'Next.js'}
                                                 logos={themeObj ? 'teenyicons:nextjs-outline' : 'logos:nextjs-icon'}
                                          />
                                          <Skill
                                                 title={'node-js'}
                                                 logos={themeObj ? 'bxl:nodejs' : ''}
                                                 icon={themeObj ? '' : node}
                                          />
                                          <Skill
                                                 title={'express'}
                                                 logos={themeObj ? 'simple-icons:express' : ''}
                                                 icon={themeObj ? '' : express}
                                          />
                                          <Skill
                                                 title={'mongodb'}
                                                 logos={themeObj ? 'simple-icons:mongodb' : ''}
                                                 icon={themeObj ? '' : mongo}
                                                 description={'mongoose'}
                                          />
                                   </div>
                            </div>
                     </Fade>
              </div>
       )
}