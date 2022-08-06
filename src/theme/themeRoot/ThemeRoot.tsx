import React from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext'
import Toggle from '../../header/toggle/Toggle'

export const ThemeRoot = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <Toggle
        onChange={() => {
          if (theme === themes.light) setTheme && setTheme(themes.dark)
          if (theme === themes.dark) setTheme && setTheme(themes.light)
        }}
        value={theme === themes.dark}
      />
    )}
  </ThemeContext.Consumer>
)

