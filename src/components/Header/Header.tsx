import { Link } from '@tanstack/react-router'
import { useEffect, useLayoutEffect, useState } from 'react'
import './header.css'

export function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useLayoutEffect(() => {
    if (
      !('darkMode' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      window.localStorage.setItem('darkMode', JSON.stringify('true'))
      setDarkMode(true)
    } else if (
      'darkMode' in localStorage &&
      JSON.parse(window.localStorage.getItem('darkMode') as string) !== null
    ) {
      setDarkMode(JSON.parse(window.localStorage.getItem('darkMode') as string))
    } else {
      window.localStorage.setItem('darkMode', JSON.stringify('false'))
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    const htmlElement = document.documentElement

    if (darkMode) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }

    window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <div className="mx-auto max-w-[327px] pt-8 md:max-w-[689px] md:pt-10.5 lg:max-w-[1110px] lg:pt-11">
        <div className="flex items-center">
          <Link to="/">
            <img src="/assets/desktop/logo.svg" alt="devjobs logo" />
          </Link>
          <div className="ms-auto flex items-center">
            <label htmlFor="theme-switch" className="flex items-center">
              <img
                src="/assets/desktop/icon-sun.svg"
                alt=""
                className="self-center"
              />
              <input
                type="checkbox"
                name="theme-switch"
                id="theme-switch"
                className="switch"
                onChange={toggleTheme}
                checked={darkMode}
              />
              <img
                src="/assets/desktop/icon-moon.svg"
                alt=""
                className="self-center"
              />
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}
