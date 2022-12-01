import React from 'react';
import style from './Projects.module.scss';
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import { Fade } from 'react-awesome-reveal'
import todoImage from '../assets/images/todolist.jpg'
import omarketImage from '../assets/images/omarket.jpg'
import turbinaryImage from '../assets/images/turbinary.jpg'
import hotelSearchImage from '../assets/images/hotel-search.jpg'
import netflixImage from '../assets/images/netflix.jpg'
import socialImage from '../assets/images/social-network.png'
import onlineStoreImage from '../assets/images/online-store.jpg'
import googleBooksImage from '../assets/images/google-books.jpg'
import questionsImage from '../assets/images/questions-stackoverflow.jpg'
import calculatorImage from '../assets/images/calculator.jpg'
import carLeasingCalculatorImage from '../assets/images/car-leasing-calculator.jpg'
import cmsPanelImage from '../assets/images/cms-panel.jpg'
import chatImage from '../assets/images/chat-firebase.png'
import catImage from '../assets/images/cat-images.png'
import firebaseIcon from '../assets/images/firebase.svg'
import webpackIcon from '../assets/images/webpack.svg'
import keep from '../assets/videos/fashion-catalog.mp4'
import hockey from '../assets/videos/hockey.mp4'
// import turbinary from '../assets/videos/turbinary.mp4'


type PropsType = {
    lang?: string
}

export const Projects: React.FC<PropsType> = ({ lang }) => {

    const turbinary = { backgroundImage: `url(${turbinaryImage})` }
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
    const catImages = { backgroundImage: `url(${catImage})` }
    const chat = { backgroundImage: `url(${chatImage})` }
    const CMSPanel = { backgroundImage: `url(${cmsPanelImage})` }

    const descriptionTurbinary = lang === 'en'
        ? `Catalog, layout. Search. сhoice of categories.. as well as for the mobile version`
        : 'Каталог, макет. Поиск, выбор категорий, так же под мобильную версию'
    const descriptionTurbinaryStack = `Webpack, JavaScript / TypeScript, React, SASS, mock-data`

    const descriptionFashionCatalog = lang === 'en'
        ? `Fashion catalog with beautiful scroll slider`
        : `Каталог модной одежды с красивым слайдером прокрутки`
    const descriptionFashionCatalogStack = `JavaScript / TypeScript, React, SASS`

    const descriptionHockeyShop = lang === 'en'
        ? `Beautiful hockey shop layout`
        : `Красивая планировка хоккейного магазина`
    const descriptionHockeyShopStack = `JavaScript / TypeScript, React, SASS`

    const descriptionOmarket = lang === 'en'
        ? `Fork project, Large commercial project`
        : `Fork проекта, Большой коммерческий проект`
    const descriptionOmarketStack = `JavaScript / TypeScript, React, Redux, Redux/Toolkit, SCSS, native js `

    const descriptionHotelSearch = lang === 'en'
        ? `Hotel search application, request hotels with API,Authorization page, Request parameters where you can enter the name of the city, 
        date check-in and number of days. Hotels can be added to your favorites. Selected hotels can be sorted by cost and number of stars. etc.`
        : `Приложение для поиска отелей, запрос отелей с API, страница авторизации, параметры запроса, где вы можете ввести название города,
         дату заселения и кол-во дней. Отели могут быть добавлены в избранное. Выбранные отели можно отсортировать по стоимости и количеству звезд. и так далее.`
    const descriptionHotelSearchStack = `JavaScript / TypeScript, React, Redux (Redux-Saga) React-Hooks, saved in sessStorage`

    const descriptionGoogleBooksAPI = lang === 'en'
        ? `App requesting books from the Google API, 'load more' pagination, filtering, as well as filtering by categories,
         implemented on the front, because there is no on the back-end. Clicking on the card will redirect you to a detailed description of the book.`
        : `Приложение, запрашивающее книги из Google API, Подгрузка книг(load more), фильтрация, а также фильтрация по категориям,
        реализованная на фронте, потому что нету на back-end. Нажав на карточку вас перенаправит на подробное описание книги.`
    const descriptionGoogleBooksAPIStack = `JavaScript / TypeScript, React Redux, SASS, etc.`

    const descriptionOnlineStore = lang === 'en'
        ? `Online Store layout. Search by selected categories. as well as for the mobile version`
        : `Макет интернет-магазина. Поиск, поиск по выбранным категориям, так же под мобильную версию`
    const descriptionOnlineStoreStack = `JavaScript / TypeScript, React, SASS`

    const descriptionQuestions = lang === 'en'
        ? `The app queries and displays questions on Stackoverflow, search by title and date. 
            Drag and Drop, close the window when clicking not on an item. load additional questions according to the number selected in the selector'`
        : `Приложение запрашивает и отображает вопросы со Stackoverflow, выполняет поиск по заголовку и дате.
        Перетаскивание(Drag and Drop),  закрыть окно при клике не по элементу. загрузить дополнительнные вопросы в соответствии с кол-вом, выбранном в селекторе`
    const descriptionQuestionsStack = `JavaScript / TypeScript, Reaact, Redux, Redux-Thunk, react-beautiful-dnd, mui, interaction with the API server`

    const descriptionTodo = lang === 'en'
        ? `Huge project - Todo list with storage of data on remote server`
        : `Большой проект - Todo list с хранением данных на удаленном сервере`
    const descriptionTodoStack = `JavaScript / TypeScript, React, Redux (Redux-thunk, Redux-toolkit, Hooks), REST API, Storybook, 
         Unit and snapshot tests. Formik, Material-UI. And much more...`

    const descriptionNetwork = lang === 'en' ? `Social network` : `Социальная сеть`
    const descriptionNetworkStack = `JavaScript / TypeScript, React, Redux, redux-thunk, Hooks, 
         REST API Axios, Formik, HOC, context API, Class components, selectors(reselect), test's. And much more...`

    const descriptionCRMPanel = lang === 'en'
        ? `Сontrol panel CRM, connected to the service and display the addresses entered by the user on the page. as well as for the mobile version`
        : `Панель управления CRM, подключенная к сервису и отображающая адреса, введенные пользователем в поиске, так же под мобильную версию`
    const descriptionCRMPanelStack = `JavaScript / TypeScript, React, SASS, interaction with the API server`

    const descriptioncarLeasingCalculator = lang === 'en'
        ? `Calculate the cost of a car lease`
        : `Рассчитать стоимость аренды автомобиля`
    const descriptioncarLeasingCalculatorStack = `JavaScript / TypeScript, React, SASS`

    const descriptionNetflix = lang === 'en'
        ? `Netflix app, Netflix copy, request API themoviedb. scroll, when clicking on the picture, the video is played`
        : `Netflix, копия Netflix, запрос API themoviedb. прокрутка, при нажатии на картинку воспроизводится видео`
    const descriptionNetflixStack = `JavaScript / TypeScript, React, Hooks. request API, css BEM, movie-trailer`

    const descriptionCalculator = lang === 'en'
        ? `Calculator, Not using the EVAL method, as well as keyboard input, + Escape, Enter, NumpadEnter`
        : `Калькулятор, не использующий метод EVAL, а также ввод с клавиатуры, + Escape, Enter, NumpadEnter`
    const descriptionCalculatorStack = `JavaScript / TypeScript, Native Webpack build, React, Redux`

    const descriptionChatFirebase = lang === 'en'
        ? 'Simple chat on React and Firebase. Login via google and email'
        : `Простой чат на React и Firebase. Вход через гугл и электронную почту`
    const descriptionChatFirebaseStack = 'JavaScript / TypeScript, React, Firebase. Hooks, CSS'

    const descriptionCatImages = lang === 'en'
        ? `The application requests images from the API and displays them, Pagination, the ability to add to 'favorites' and remove from 'favorites'`
        : `Приложение запрашивает  по API изображения и отображает их, Пагинация, возможность добавлять в «избранное» и удалять из «избранного»`
    const descriptionCatImagesStack = `JavaScript / TypeScript, React, Redux, interaction with the API server`


    return (
        <div id='project' className={style.projectsBlock}>
            <div className={style.container} >
                <Fade direction='up' triggerOnce={true}>
                    <Title text={lang === 'en' ? 'Projects' : 'Проекты'} />
                </Fade>
                <div className={style.projects}>
                    <Project
                        style={turbinary}
                        way={'turbinary'}
                        title={'Games Catalog - webpack build'}
                        gitWay={'turbinary'}
                        icon={webpackIcon}
                        description={descriptionTurbinary}
                        descriptionStack={descriptionTurbinaryStack}
                        lang={lang}
                    />
                    <Project
                        videos={keep}
                        way={'fashion-catalog'}
                        title={'Fashion Catalog'}
                        gitWay={'fashion-catalog'}
                        description={descriptionFashionCatalog}
                        descriptionStack={descriptionFashionCatalogStack}
                        height={220}
                        lang={lang}
                    />
                    <Project
                        videos={hockey}
                        way={'hockey-shop'}
                        title={'Hockey Shop'}
                        gitWay={'hockey-shop'}
                        description={descriptionHockeyShop}
                        descriptionStack={descriptionHockeyShopStack}
                        height={220}
                        lang={lang}
                    />
                    <Project
                        style={omarket}
                        way={'omarket'}
                        title={'Omarket'}
                        gitWay={'omarket'}
                        description={descriptionOmarket}
                        descriptionStack={descriptionOmarketStack}
                        notPagesIo
                        lang={lang}
                    />
                    <Project
                        style={hotelSearch}
                        way={'hotel-search'}
                        title={'Hotel Search'}
                        gitWay={'hotel-search'}
                        description={descriptionHotelSearch}
                        descriptionStack={descriptionHotelSearchStack}
                        lang={lang}
                    />
                    <Project
                        style={todolist}
                        way={'todolist'}
                        title={'Todo list'}
                        gitWay={'todolist'}
                        description={descriptionTodo}
                        descriptionStack={descriptionTodoStack}
                        lang={lang}
                    />
                    <Project
                        style={googleBooks}
                        way={'book-search'}
                        title={'Google Books API'}
                        gitWay={'book-search'}
                        description={descriptionGoogleBooksAPI}
                        descriptionStack={descriptionGoogleBooksAPIStack}
                        lang={lang}
                    />
                    <Project
                        style={onlineStore}
                        way={'online-store'}
                        title={'Onlie Store'}
                        gitWay={'online-store'}
                        description={descriptionOnlineStore}
                        descriptionStack={descriptionOnlineStoreStack}
                        lang={lang}
                    />
                    <Project
                        style={questions}
                        way={'questions-stackoverflow'}
                        title={'Questions Stackoverflow - webpack build'}
                        icon={webpackIcon}
                        gitWay={'questions-stackoverflow'}
                        description={descriptionQuestions}
                        descriptionStack={descriptionQuestionsStack}
                        lang={lang}
                    />
                    <Project
                        style={social}
                        way={'TypeScript-Social-Network'}
                        title={'Social Network'}
                        gitWay={'TypeScript-Social-Network'}
                        description={descriptionNetwork}
                        descriptionStack={descriptionNetworkStack}
                        lang={lang}
                    />
                    <Project
                        style={CMSPanel}
                        way={'crm-control-panel'}
                        title={'Сontrol panel CRM - webpack build'}
                        icon={webpackIcon}
                        gitWay={'crm-control-panel'}
                        description={descriptionCRMPanel}
                        descriptionStack={descriptionCRMPanelStack}
                        lang={lang}
                    />
                    <Project
                        style={carLeasingCalculator}
                        way={'car-leasing-calculator'}
                        title={'Car Leasing Calculator'}
                        gitWay={'car-leasing-calculator'}
                        description={descriptioncarLeasingCalculator}
                        descriptionStack={descriptioncarLeasingCalculatorStack}
                        lang={lang}
                    />
                    <Project
                        style={netflix}
                        way={'netflix'}
                        title={'Netflix'}
                        gitWay={'netflix'}
                        description={descriptionNetflix}
                        descriptionStack={descriptionNetflixStack}
                        lang={lang}
                    />
                    <Project
                        style={calculator}
                        way={'webpack-build-calculator'}
                        title={'Calculator - webpack build'}
                        icon={webpackIcon}
                        gitWay={'webpack-build-calculator'}
                        description={descriptionCalculator}
                        descriptionStack={descriptionCalculatorStack}
                        lang={lang}
                    />
                    <Project
                        style={chat}
                        way={'chat-firebase'}
                        title={`Chat Firebase`}
                        icon={firebaseIcon}
                        gitWay={'chat-firebase'}
                        description={descriptionChatFirebase}
                        descriptionStack={descriptionChatFirebaseStack}
                        lang={lang}
                    />
                    <Project
                        style={catImages}
                        way={'cat-images'}
                        title={'Cat Images'}
                        gitWay={'cat-images'}
                        description={descriptionCatImages}
                        descriptionStack={descriptionCatImagesStack}
                        lang={lang}
                    />
                </div>
            </div>
        </div>
    );
}
