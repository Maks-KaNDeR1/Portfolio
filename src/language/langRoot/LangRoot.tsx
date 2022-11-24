import React from 'react'
import { LangContext, langs, LangsTypes } from '../contexts/LangContext'
import Toggle from '../toggle/Toggle'
import { LangsObjType } from '../contexts/LangContext'

const checkLang = (lang: string | undefined, langs: LangsObjType) => {
  if (lang) {
    const langVal = lang as LangsTypes
    return langs[langVal]
  }
  return langs.ru
}

export const LangRoot = () => (
  <LangContext.Consumer>
    {({ lang, setLang }) => (
      <Toggle
        onChange={(lang) => {
          setLang && setLang(lang)
        }}
        value={checkLang(lang, langs)}
      />
    )}
  </LangContext.Consumer>
)