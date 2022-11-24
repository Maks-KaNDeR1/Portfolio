import React, { Dispatch, SetStateAction } from 'react'

export type LangsTypes = 'ru' | 'en'

export const langs = {
  ru: 'ru' as const,
  en: 'en' as const,
}

export type LangsObjType = typeof langs;

type ContextProps = {
  lang: string,
  setLang: Dispatch<SetStateAction<string>>
}

export const LangContext = React.createContext<Partial<ContextProps>>({})
