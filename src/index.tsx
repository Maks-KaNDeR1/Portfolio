import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from './theme/providers/ThemeProvider'
import { LangProvider } from './language/providers/LangProvider'


ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider >
        <App />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
