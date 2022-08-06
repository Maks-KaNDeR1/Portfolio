import React, { Dispatch, SetStateAction } from 'react'

export const themes = {
  dark: 'dark',
  light: 'light',
}

type ContextProps = {
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = React.createContext<Partial<ContextProps>>({})
