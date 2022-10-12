import React from 'react';
import style from './Projects.module.scss';
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import { Fade } from 'react-awesome-reveal'
import todoImage from './../assets/images/todolist.jpg'
import omarketImage from './../assets/images/omarket.jpg'
import hotelSearchImage from './../assets/images/hotel-search.jpg'
import netflixImage from './../assets/images/netflix.jpg'
import socialImage from './../assets/images/social-network.png'
import onlineStoreImage from './../assets/images/online-store.jpg'
import googleBooksImage from './../assets/images/google-books.jpg'
import questionsImage from './../assets/images/questions-stackoverflow.jpg'
import calculatorImage from './../assets/images/calculator.jpg'
import carLeasingCalculatorImage from './../assets/images/car-leasing-calculator.jpg'
import counterImage from './../assets/images/counter.png'
import chatImage from './../assets/images/chat-firebase.png'
import catImage from './../assets/images/cat-images.png'
import firebaseIcon from './../assets/images/firebase.svg'
import webpackIcon from './../assets/images/webpack.svg'



export const Projects = () => {

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

    const descriptionOmarket = (
        `Fork project, Large commercial project. 
        Technology stack: TypeScript, React, Redux, Redux/Toolkit, SCSS, native js `
    )
    const descriptionHotelSearch = (
        `Hotel search application, request hotels with API,Authorization page, Request parameters where you can enter the name of the city, 
         date check-in and number of days. Hotels can be added to your favorites. Selected hotels can be sorted by cost and number of stars. etc. 
         In TypeScript, React, Redux (Redux-Saga) React-Hooks, saved in sessStorage`
    )
    const descriptionGoogleBooksAPI = (
        `Google Books Api - App Based on React Redux, SASS, etc., requesting books from the Google API, 
        'load more' pagination, filtering, as well as filtering by category, implemented on the front, because. not on the back. 
         Clicking on the card will take you to the detailed page of the book`
    )
    const descriptionOnlineStore = (
        `Online Store layout. Search by selected categories. as well as for the mobile version.
        Stack: React, TypeScript, Sass`
    )
    const descriptionQuestions = (
        `The app queries and displays questions on Stackoverflow, search by title and date. 
         Drag and Drop, on auth site click. load more loading of data, according to the number selected in the select
         Stack: TypeScript, Reaact, Redux, Redux-Thunk, react-beautiful-dnd, mui `
    )
    const descriptionTodo = (
        `Huge project - Todo list with storage of data on remote server. 
         Technology stack: React, Redux (Redux-thunk, Redux-toolkit, Hooks), REST API, Storybook, 
         Unit and snapshot tests. Formik, Material-UI. And much more...`
    )
    const descriptionNetwork = (
        `Social network. Stack: React, Redux, redux-thunk, redux-hooks, 
         EST API Axios, DAL, Formik,High Order Component(hoc) context API, Router, Class components, 
         selectors(reselect), test. And much more...`
    )
    const descriptioncarLeasingCalculator = (
        `Calculate the cost of a car lease. Stack: React, TypeScript, Sass`
    )
    const descriptionNetflix = (
        `Netflix app, Netflix copy, React, Hooks. request API themoviedb, css BEM. scroll When clicking on the picture, the video is played, movie-trailer`
    )
    const descriptionCalculator = (
        `Native Webpack build, Computational calculator on TypeScript, React, Redux, Not using the EVAL method, well, with it too.
         As well as keyboard input, + Escape, Enter, NumpadEnter`
    )
    const descriptionCounter = (
        `Just simple counter with settings start value and end value. Saving State to LocalStorage. 
         I used in this project React, Redux, clean CSS, React-router-dom and more`
    )
    const descriptionChatFirebase = (
        'Simple chat on React and Firebase. Login via google and email. Hooks, CSS'
    )
    const descriptionCatImages = (
        `test task/ Cat pictures API, Pagination, the ability to add to "favorites" and remove from "favorites" on React, Redux, interaction with the API server`
    )


    return (
        <div id='project' className={style.projectsBlock}>
            <div className={style.container} >
                <Fade direction='up' triggerOnce={true} >
                    <Title text={"Projects"} />
                </Fade>
                <div className={style.projects}>
                    <Project
                        style={omarket}
                        way={'omarket'}
                        title={"Omarket"}
                        gitWay={'omarket'}
                        description={descriptionOmarket}
                    />
                    <Project
                        style={hotelSearch}
                        way={'hotel-search'}
                        title={"Hotel Search"}
                        gitWay={'hotel-search'}
                        description={descriptionHotelSearch}
                    />
                    <Project
                        style={todolist}
                        way={'todolist'}
                        title={"Todo list"}
                        gitWay={'todolist'}
                        description={descriptionTodo}
                    />
                    <Project
                        style={googleBooks}
                        way={'book-search'}
                        title={"Google Books API"}
                        gitWay={'book-search'}
                        description={descriptionGoogleBooksAPI}
                    />
                    <Project
                        style={onlineStore}
                        way={'online-store'}
                        title={"Onlie Store"}
                        gitWay={'online-store'}
                        description={descriptionOnlineStore}
                    />
                    <Project
                        style={questions}
                        way={'questions-stackoverflow'}
                        title={"Questions Stackoverflow - webpack build"}
                        icon={webpackIcon}
                        gitWay={'questions-stackoverflow'}
                        description={descriptionQuestions}
                    />
                    <Project
                        style={social}
                        way={'TypeScript-Social-Network'}
                        title={"Social network"}
                        gitWay={'TypeScript-Social-Network'}
                        description={descriptionNetwork}
                    />
                    <Project
                        style={carLeasingCalculator}
                        way={'car-leasing-calculator'}
                        title={"Car Leasing Calculator"}
                        gitWay={'car-leasing-calculator'}
                        description={descriptioncarLeasingCalculator}
                    />
                    <Project
                        style={netflix}
                        way={'netflix'}
                        title={"Netflix"}
                        gitWay={'netflix'}
                        description={descriptionNetflix}
                    />
                    <Project
                        style={calculator}
                        way={'webpack-build-calculator'}
                        title={"Calculator - webpack build"}
                        icon={webpackIcon}
                        gitWay={'webpack-build-calculator'}
                        description={descriptionCalculator}
                    />
                    <Project
                        style={chat}
                        way={'chat-firebase'}
                        title={`Chat Firebase`}
                        icon={firebaseIcon}
                        gitWay={'chat-firebase'}
                        description={descriptionChatFirebase}
                    />
                    <Project
                        style={catImages}
                        way={'cat-images'}
                        title={"Cat Images"}
                        gitWay={'cat-images'}
                        description={descriptionCatImages}
                    />
                    <Project
                        style={counter}
                        way={'Counter'}
                        title={"Counter"}
                        gitWay={'Counter'}
                        description={descriptionCounter}
                    />
                </div>
            </div>
        </div>
    );
}
