import React from 'react';
import style from './Projects.module.scss';
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import { Fade } from 'react-awesome-reveal'
import todoImage from './../assets/images/todolist.jpg'
import omarketImage from './../assets/images/omarket.jpg'
import turbinaryImage from './../assets/images/turbinary.jpg'
import hotelSearchImage from './../assets/images/hotel-search.jpg'
import netflixImage from './../assets/images/netflix.jpg'
import socialImage from './../assets/images/social-network.png'
import onlineStoreImage from './../assets/images/online-store.jpg'
import googleBooksImage from './../assets/images/google-books.jpg'
import questionsImage from './../assets/images/questions-stackoverflow.jpg'
import calculatorImage from './../assets/images/calculator.jpg'
import carLeasingCalculatorImage from './../assets/images/car-leasing-calculator.jpg'
import cmsPanelImage from './../assets/images/cms-panel.jpg'
import counterImage from './../assets/images/counter.png'
import chatImage from './../assets/images/chat-firebase.png'
import catImage from './../assets/images/cat-images.png'
import firebaseIcon from './../assets/images/firebase.svg'
import webpackIcon from './../assets/images/webpack.svg'
import keepIcon from './../assets/images/keep1.gif'
import hockeyIcon from './../assets/images/hockeyshop1.gif'



export const Projects = () => {
    const turbinary = { backgroundImage: `url(${turbinaryImage})` }
    const keep_kalm = { backgroundImage: `url(${keepIcon})` }
    const hockey_shop = { backgroundImage: `url(${hockeyIcon})` }
    const omarket = { backgroundImage: `url(${omarketImage})` }
    const hotelSearch = { backgroundImage: `url(${hotelSearchImage})` }
    const todolist = { backgroundImage: `url(${todoImage})` }
    const onlineStore = { backgroundImage: `url(${onlineStoreImage})` }
    const googleBooks = { backgroundImage: `url(${googleBooksImage})` }
    const questions = { backgroundImage: `url(${questionsImage})` }
    const social = { backgroundImage: `url(${socialImage})` }
    const carLeasingCalculator = { backgroundImage: `url(${carLeasingCalculatorImage})` }
    const netflix = { backgroundImage: `url(${netflixImage})` }
    const calculator = { backgroundImage: `url(${calculatorImage})` }
    const counter = { backgroundImage: `url(${counterImage})` }
    const catImages = { backgroundImage: `url(${catImage})` }
    const chat = { backgroundImage: `url(${chatImage})` }
    const CMSPanel = { backgroundImage: `url(${cmsPanelImage})` }

    const descriptionTurbinary = `Catalog, layout. Search by selected categories. as well as for the mobile version`
    const descriptionTurbinaryStack = `Webpack, JavaScript / TypeScript, React, SASS, mock`

    const descriptionKeep = `Fashion catalog with beautiful scroll slider`
    const descriptionKeepStack = `JavaScript / TypeScript, React, SASS`

    const descriptionHockeyShop = `Beautiful hockey shop layout`
    const descriptionHockeyShopStack = `JavaScript / TypeScript, React, SASS`

    const descriptionOmarket = `Fork project, Large commercial project`
    const descriptionOmarketStack = `JavaScript / TypeScript, React, Redux, Redux/Toolkit, SCSS, native js `


    const descriptionHotelSearch = (
        `Hotel search application, request hotels with API,Authorization page, Request parameters where you can enter the name of the city, 
         date check-in and number of days. Hotels can be added to your favorites. Selected hotels can be sorted by cost and number of stars. etc.`
    )
    const descriptionHotelSearchStack = `JavaScript / TypeScript, React, Redux (Redux-Saga) React-Hooks, saved in sessStorage`

    const descriptionGoogleBooksAPI = (
        `Google Books API - App requesting books from the Google API, 
        'load more' pagination, filtering, as well as filtering by category, implemented on the front, because. not on the back. 
         Clicking on the card will take you to the detailed page of the book`
    )
    const descriptionGoogleBooksAPIStack = `JavaScript / TypeScript, React Redux, SASS, etc.`

    const descriptionOnlineStore = `Online Store layout. Search by selected categories. as well as for the mobile version`
    const descriptionOnlineStoreStack = `JavaScript / TypeScript, React, SASS`

    const descriptionQuestions = (
        `The app queries and displays questions on Stackoverflow, search by title and date. 
         Drag and Drop, on auth site click. load more loading of data, according to the number selected in the select`
    )
    const descriptionQuestionsStack = `JavaScript / TypeScript, Reaact, Redux, Redux-Thunk, react-beautiful-dnd, mui, interaction with the API server`

    const descriptionTodo = `Huge project - Todo list with storage of data on remote server`
    const descriptionTodoStack = `JavaScript / TypeScript, React, Redux (Redux-thunk, Redux-toolkit, Hooks), REST API, Storybook, 
         Unit and snapshot tests. Formik, Material-UI. And much more...`

    const descriptionNetwork = `Social network`
    const descriptionNetworkStack = `JavaScript / TypeScript, React, Redux, redux-thunk, Hooks, 
         REST API Axios, Formik, HOC, context API, Class components, selectors(reselect), test's. And much more...`

    const descriptionCRMPanel = `Сontrol panel CRM, connected to the service and display the addresses entered by the user on the page. as well as for the mobile version`

    const descriptionCRMPanelStack = `JavaScript / TypeScript, React, SASS, interaction with the API server`

    const descriptioncarLeasingCalculator = `Calculate the cost of a car lease`
    const descriptioncarLeasingCalculatorStack = `JavaScript / TypeScript, React, SASS`

    const descriptionNetflix = `Netflix app, Netflix copy, request API themoviedb. scroll When clicking on the picture, the video is played`
    const descriptionNetflixStack = `JavaScript / TypeScript, React, Hooks. request API, css BEM, movie-trailer`

    const descriptionCalculator = `Calculator, Not using the EVAL method, well, with it too. As well as keyboard input, + Escape, Enter, NumpadEnter`
    const descriptionCalculatorStack = `JavaScript / TypeScript, Native Webpack build, React, Redux`

    const descriptionCounter = `Just simple counter with settings start value and end value. Saving State to LocalStorage`
    const descriptionCounterStack = `JavaScript / TypeScriptReact, Redux, CSS, LocalStorage, and more`

    const descriptionChatFirebase = 'Simple chat on React and Firebase. Login via google and email. Hooks, CSS'
    const descriptionChatFirebaseStack = 'JavaScript / TypeScript, React, Firebase. Hooks, CSS'

    const descriptionCatImages = `Cat pictures API, Pagination, the ability to add to "favorites" and remove from "favorites"`
    const descriptionCatImagesStack = `JavaScript / TypeScript, React, Redux, interaction with the API server`


    return (
        <div id='project' className={style.projectsBlock}>
            <div className={style.container} >
                <Fade direction='up' triggerOnce={true} >
                    <Title text={"Projects"} />
                </Fade>
                <div className={style.projects}>
                    <Project
                        style={turbinary}
                        way={'turbinary'}
                        title={"Catalog - webpack build"}
                        gitWay={'turbinary'}
                        icon={webpackIcon}
                        description={descriptionTurbinary}
                        descriptionStack={descriptionTurbinaryStack}
                    />
                    <Project
                        style={keep_kalm}
                        way={'keep-kalm'}
                        title={"Fashion catalog"}
                        gitWay={'keep-kalm'}
                        description={descriptionKeep}
                        descriptionStack={descriptionKeepStack}
                    />
                    <Project
                        style={hockey_shop}
                        way={'hockey-shop'}
                        title={"Hockey shop"}
                        gitWay={'hockey-shop'}
                        description={descriptionHockeyShop}
                        descriptionStack={descriptionHockeyShopStack}
                    />
                    <Project
                        style={omarket}
                        way={'omarket'}
                        title={"Omarket"}
                        gitWay={'omarket'}
                        description={descriptionOmarket}
                        descriptionStack={descriptionOmarketStack}
                        notPagesIo
                    />
                    <Project
                        style={hotelSearch}
                        way={'hotel-search'}
                        title={"Hotel Search"}
                        gitWay={'hotel-search'}
                        description={descriptionHotelSearch}
                        descriptionStack={descriptionHotelSearchStack}
                    />
                    <Project
                        style={todolist}
                        way={'todolist'}
                        title={"Todo list"}
                        gitWay={'todolist'}
                        description={descriptionTodo}
                        descriptionStack={descriptionTodoStack}
                    />
                    <Project
                        style={googleBooks}
                        way={'book-search'}
                        title={"Google Books API"}
                        gitWay={'book-search'}
                        description={descriptionGoogleBooksAPI}
                        descriptionStack={descriptionGoogleBooksAPIStack}
                    />
                    <Project
                        style={onlineStore}
                        way={'online-store'}
                        title={"Onlie Store"}
                        gitWay={'online-store'}
                        description={descriptionOnlineStore}
                        descriptionStack={descriptionOnlineStoreStack}
                    />
                    <Project
                        style={questions}
                        way={'questions-stackoverflow'}
                        title={"Questions Stackoverflow - webpack build"}
                        icon={webpackIcon}
                        gitWay={'questions-stackoverflow'}
                        description={descriptionQuestions}
                        descriptionStack={descriptionQuestionsStack}
                    />
                    <Project
                        style={social}
                        way={'TypeScript-Social-Network'}
                        title={"Social network"}
                        gitWay={'TypeScript-Social-Network'}
                        description={descriptionNetwork}
                        descriptionStack={descriptionNetworkStack}
                    />
                    <Project
                        style={CMSPanel}
                        way={'crm-control-panel'}
                        title={"Сontrol panel CRM - webpack build"}
                        icon={webpackIcon}
                        gitWay={'crm-control-panel'}
                        description={descriptionCRMPanel}
                        descriptionStack={descriptionCRMPanelStack}
                    />
                    <Project
                        style={carLeasingCalculator}
                        way={'car-leasing-calculator'}
                        title={"Car Leasing Calculator"}
                        gitWay={'car-leasing-calculator'}
                        description={descriptioncarLeasingCalculator}
                        descriptionStack={descriptioncarLeasingCalculatorStack}
                    />
                    <Project
                        style={netflix}
                        way={'netflix'}
                        title={"Netflix"}
                        gitWay={'netflix'}
                        description={descriptionNetflix}
                        descriptionStack={descriptionNetflixStack}
                    />
                    <Project
                        style={calculator}
                        way={'webpack-build-calculator'}
                        title={"Calculator - webpack build"}
                        icon={webpackIcon}
                        gitWay={'webpack-build-calculator'}
                        description={descriptionCalculator}
                        descriptionStack={descriptionCalculatorStack}
                    />
                    <Project
                        style={chat}
                        way={'chat-firebase'}
                        title={`Chat Firebase`}
                        icon={firebaseIcon}
                        gitWay={'chat-firebase'}
                        description={descriptionChatFirebase}
                        descriptionStack={descriptionChatFirebaseStack}
                    />
                    <Project
                        style={catImages}
                        way={'cat-images'}
                        title={"Cat Images"}
                        gitWay={'cat-images'}
                        description={descriptionCatImages}
                        descriptionStack={descriptionCatImagesStack}
                    />
                    <Project
                        style={counter}
                        way={'Counter'}
                        title={"Counter"}
                        gitWay={'Counter'}
                        description={descriptionCounter}
                        descriptionStack={descriptionCounterStack}
                    />
                </div>
            </div>
        </div>
    );
}
