import React from 'react'
import './App.scss'
import { Header } from "./header/Header"
import { Main } from "./main/Main"
import { Skills } from "./skills/Skills"
import { Projects } from "./projects/Projects"
import { Hire } from "./hire/Hire"
import { Contacts } from "./contacts/Contacts"
import { Footer } from "./footer/Footer"
import { ThemeContext } from './theme/contexts/ThemeContext'


export const App = () => {

  return <ThemeContext.Consumer>
    {({ theme }) => (
      <div className="App">
        <Header />
        <Main theme={theme} />
        <Skills theme={theme} />
        <Projects />
        <Hire />
        <Contacts theme={theme} />
        <Footer theme={theme} />
      </div>
    )}
  </ThemeContext.Consumer>
}

export default App
