import React from 'react'
import './App.scss'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { Skills } from './skills/Skills'
import { Projects } from './projects/Projects'
import { Hire } from './hire/Hire'
import { Contacts } from './contacts/Contacts'
import { Footer } from './footer/Footer'
import { ThemeContext } from './theme/contexts/ThemeContext'
import { LangContext } from './language/contexts/LangContext'


export const App = () => {
  return (
    <LangContext.Consumer>
      {({ lang }) => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div className='App'>
              <Header lang={lang} />
              <Main lang={lang} theme={theme} />
              <Skills lang={lang} theme={theme} />
              <Projects lang={lang} />
              <Hire lang={lang} />
              <Contacts lang={lang} theme={theme} />
              <Footer lang={lang} theme={theme} />
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </LangContext.Consumer>
  )
}

export default App
