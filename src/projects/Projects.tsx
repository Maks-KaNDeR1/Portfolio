import React from 'react';
import style from './Projects.module.scss';
import { Project } from './project/Project';
import { Title } from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg'
import hotelSearchImage from './../assets/images/hotel-search.jpg'
import netflixImage from './../assets/images/netflix.jpg'
import socialImage from './../assets/images/social-network.png'
import googleBooksImage from './../assets/images/google-books.jpg'
import calculatorImage from './../assets/images/calculator.jpg'
import counterImage from './../assets/images/counter.png'
import chatImage from './../assets/images/chat-firebase.png'
import catImage from './../assets/images/cat-images.png'
import firebaseIcon from './../assets/images/firebase.svg'
import webpackIcon from './../assets/images/webpack.svg'
import { Fade } from 'react-awesome-reveal';



export const Projects = () => {

    const social = { backgroundImage: `url(${socialImage})` }
    const todolist = { backgroundImage: `url(${todoImage})` }
    const hotelSearch = { backgroundImage: `url(${hotelSearchImage})` }
    const netflix = { backgroundImage: `url(${netflixImage})` }
    const googleBooks = { backgroundImage: `url(${googleBooksImage})` }
    const calculator = { backgroundImage: `url(${calculatorImage})` }
    const counter = { backgroundImage: `url(${counterImage})` }
    const catImages = { backgroundImage: `url(${catImage})` }
    const chat = { backgroundImage: `url(${chatImage})` }

    let firebase = firebaseIcon
    let webpack = webpackIcon


    let descriptionHotelSearch = (`Hotel search application, request hotels with API,Authorization page, Request parameters where you can enter the name of the city, 
    date check-in and number of days. Hotels can be added to your favorites. Selected hotels can be sorted by cost and number of stars. etc. 
    In TypeScript, React, Redux (Redux-thunk, Redux-Saga) React-Hooks, saved in sessStorage `)
    let descriptionNetwork = (`Social network. Stack Technology: React, Redux, redux-thunk, redux-hooks, 
	REST API Axios,	DAL, Formik,High Order Component(hoc) context API, Router, Class components, 
	selectors(reselect), test. And much more...`)
    let descriptionTodo = (`Huge project - Todo list with storage of data on remote server. 
	Technology stack: React, Redux (Redux-thunk, Redux-toolkit, Hooks), REST API, Storybook, 
	Unit and snapshot tests. Formik, Material-UI. And much more... `)
    let descriptionNetflix = (`Netflix app, Netflix copy, React, Hooks. request API themoviedb, css BEM. scroll When clicking on the picture, the video is played, movie-trailer`)
    let descriptionGoogleBooksAPI = (`Google Books Api - App Based on React Redux, SASS, etc., requesting books from the Google API, 
    'load more' pagination, filtering, as well as filtering by category, implemented on the front, because. not on the back. 
    Clicking on the card will take you to the detailed page of the book.`)
    let descriptionCalculator = (`Native Webpack build, Computational calculator on TypeScript, React, Redux, Not using the EVAL method, well, with it too. As well as keyboard input, + Escape, Enter, NumpadEnter`)
    let descriptionCounter = (`Just simple counter with settings start value and end value. Saving State to LocalStorage. 
    I used in this project React, Redux, clean CSS, React-router-dom and more`)
    let descriptionFirebase = ('Simple chat on React and Firebase. Login via google and email. Hooks, CSS')
    let descriptionCatImages = (`test task/ Cat pictures API, Pagination, the ability to add to "favorites" and remove from "favorites" on React, Redux, interaction with the API server`)


    return (
        <div id='project' className={style.projectsBlock}>
            <div className={style.container} >
                <Fade direction='up' triggerOnce={true} >
                    <Title text={"Projects"} />
                </Fade>
                <div className={style.projects}>
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
                        style={social}
                        way={'TypeScript-Social-Network'}
                        title={"Social network"}
                        gitWay={'TypeScript-Social-Network'}
                        description={descriptionNetwork}
                    />
                    <Project
                        style={googleBooks}
                        way={'books-search'}
                        title={"Google Books API"}
                        gitWay={'books-search'}
                        description={descriptionGoogleBooksAPI}
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
                        icon={webpack}
                        gitWay={'webpack-build-calculator'}
                        description={descriptionCalculator}
                    />
                    <Project
                        style={chat}
                        way={'chat-firebase'}
                        title={`Chat Firebase`}
                        icon={firebase}
                        gitWay={'chat-firebase'}
                        description={descriptionFirebase}
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
