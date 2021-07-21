import { useContext } from 'react'
import Link from 'next/link'

import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <header className="site-head">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="wrapper">
          <div className="site-head__inner">
            <Link href="/">
              <a className="site-head__brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/desktop/logo.svg" alt="devjobs logo" />
              </a>
            </Link>
            <div className="site-head__theme-switch">
              <label htmlFor="theme-switch" className="theme-switch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/desktop/icon-sun.svg" alt="" />
                <input
                  type="checkbox"
                  name="theme-switch"
                  id="theme-switch"
                  className="switch"
                  onInput={() => themeCtx.setTheme(themeCtx.theme.type)}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/desktop/icon-moon.svg" alt="" />
              </label>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        header {
          background-image: url(/assets/mobile/bg-pattern-header.svg);
          background-position: center;
          background-repeat: no-repeat;
          height: 136px;

          @media screen and (min-width: 48em) {
            background-image: url(/assets/tablet/bg-pattern-header.svg);
            height: 160px;
          }

          @media screen and (min-width: 75em) {
            background-image: url(/assets/desktop/bg-pattern-header.svg);
            height: 160.54px;
          }
        }

        .wrapper {
          margin-left: auto;
          margin-right: auto;
          max-width: 327px;
          padding-top: 2em;

          @media screen and (min-width: 48em) {
            max-width: 689px;
            padding-top: 2.625em;
          }

          @media screen and (min-width: 75em) {
            max-width: 1110px;
            padding-top: 2.75em;
          }
        }

        .skip-link {
          background-color: rgba(89, 100, 224, 0.1);
          border-radius: 5px;
          color: var(--color-primary-violet);
          display: inline-block;
          font-weight: 700;
          left: 1rem;
          padding: 0.7rem 1rem 0.5rem 1rem;
          position: absolute;
          text-decoration: none;
          text-transform: uppercase;
          top: 1rem;

          &:hover {
            background: rgba(89, 100, 224, 0.35);
          }

          &:not(:focus) {
            border: 0;
            clip: rect(0 0 0 0);
            height: auto;
            margin: 0;
            overflow: hidden;
            padding: 0;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }
        }

        .site-head__inner {
          align-items: center;
          display: flex;
        }

        .site-head__theme-switch {
          align-items: center;
          display: flex;
          margin-left: auto;
        }

        .theme-switch {
          align-items: center;
          display: flex;

          img {
            align-self: center;
          }
        }

        input[type='checkbox'] {
          --active-inner: var(--color-primary-violet);
          --active: var(--color-secondary-white);
          --background-default: #ffffff;
          --border-default: var(--color-primary-light-violet);
          --border-hover: var(--color-primary-light-violet);
          --disabled-inner: #e1e6f9;
          --disabled: #f6f8ff;
          --focus: 2px rgba(89, 100, 224, 0.35);
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background: var(--background-active, var(--background-default));
          cursor: pointer;
          display: inline-flex;
          height: 1.38rem;
          margin: 0;
          outline: none;
          position: relative;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
          vertical-align: top;

          &:after {
            content: '';
            display: block;
            left: 0;
            position: absolute;
            top: 0;
            transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
              opacity var(--d-o, 0.2s);
          }

          &:checked {
            --background-active: var(--active);
            --border-color: var(--active);
            --d-o: 0.3s;
            --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
            --d-t: 0.6s;
          }

          &:disabled {
            --background-active: var(--disabled);
            cursor: not-allowed;
            opacity: 0.9;

            &:checked {
              --background-active: var(--disabled-inner);
              --border-color: var(--border-default);
            }

            & + label {
              cursor: not-allowed;
            }
          }

          &:hover {
            &:not(:disabled) {
              --active-inner: var(--color-primary-light-violet);
            }
          }

          &:focus {
            box-shadow: 0 0 0 var(--focus);
          }

          &.switch {
            border-radius: 0.94rem;
            margin: 0 0.75rem;
            width: 2.69rem;

            &:after {
              background: var(--active-background, var(--active-inner));
              border-radius: 50%;
              height: 0.88rem;
              left: 0.25rem;
              top: 0.25rem;
              transform: translateX(var(--translate-x, 0));
              width: 0.88rem;
            }

            &:checked {
              --active-background: var(--active-inner);
              --translate-x: 1.25rem;
            }

            &:disabled {
              &:not(:checked) {
                &:after {
                  opacity: 0.6;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Header
