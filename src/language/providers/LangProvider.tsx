import React, { useEffect, useState } from 'react'
import { LangContext, langs, LangsTypes } from '../contexts/LangContext'

const getLang = () => {
  const language = `${window?.localStorage?.getItem('lang')}`
  if (Object.values(langs).includes(language as LangsTypes)) return language

  const userMedia = window.matchMedia('(lang: en)')
  if (userMedia.matches) return langs.en

  return langs.ru
}



export const LangProvider: React.FC<any> = ({ children }) => {
  const [lang, setLang] = useState(getLang)

  useEffect(() => {

    document.documentElement.dataset.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

