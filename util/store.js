import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
})

export const ThemeContextProvider = ({ children }) => {
  const themes = {
    light: {
      type: 'light',
      pageBackground: 'var(--color-secondary-light-grey)',
      bodyTextColor: 'var(--color-secondary-dark-grey)',
      headingTextColor: 'var(--color-primary-very-dark-blue)',
      headingHoverColor: 'var(--color-secondary-dark-grey)',
      cardBackgroundColor: 'var(--color-secondary-white)',
      buttonSecondaryBackgroundColor: 'rgba(89, 100, 224, 0.1)',
      buttonSecondaryHoverColor: 'rgba(89, 100, 224, 0.35)',
      buttonTextColor: 'rgb(89, 100, 224)',
    },
    dark: {
      type: 'dark',
      pageBackground: 'var(--color-primary-midnight)',
      bodyTextColor: 'var(--color-secondary-dark-grey)',
      headingTextColor: 'var(--color-secondary-white)',
      headingHoverColor: 'var(--color-secondary-dark-grey)',
      cardBackgroundColor: 'var(--color-primary-very-dark-blue)',
      buttonSecondaryBackgroundColor: 'rgba(255, 255, 255, 0.1)',
      buttonSecondaryHoverColor: 'rgba(255, 255, 255, 0.35)',
      buttonTextColor: 'rgb(255, 255, 255)',
    },
  }

  const setTheme = (type) => {
    setState({ ...state, theme: type === 'dark' ? themes.light : themes.dark })
  }

  const initialState = {
    theme: themes.light,
    setTheme: setTheme,
  }

  const [state, setState] = useState(initialState)

  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}
