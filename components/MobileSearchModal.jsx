import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { ThemeContext } from '../context/ThemeContext'

import Button from './Button'

const MobileSearchModal = () => {
  const themeCtx = useContext(ThemeContext)
  const { register } = useFormContext()

  return (
    <>
      <div className="modal-overlay">
        <div className="form-container">
          <div className="mobile-modal-content">
            <div className="form-control">
              <span className="icon">
                <svg
                  viewBox="0 0 17 24"
                  width="17"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                    fill="#5964E0"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Filter by location&hellip;"
                form="mobile-search"
                {...register('location')}
              />
            </div>
            <div className="form-control">
              <label htmlFor="contract" className="contract-label checkbox">
                <span className="checkbox__input">
                  <input
                    type="checkbox"
                    name="contract"
                    id="contract"
                    {...register('contract')}
                    form="mobile-search"
                    value="Full Time"
                  />
                  <span className="checkbox__control">
                    <svg
                      viewBox="0 0 15 12"
                      width="15"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6.57l3.572 3.572L13.714 1"
                        stroke="#FFF"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="radio__label">
                  Full Time<span className="only"> Only</span>
                </span>
              </label>
            </div>
            <Button
              type="submit"
              variant="primary"
              data-button-role="mobile-modal-search"
              form="mobile-search"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        #main-content button[data-button-role='mobile-modal-search'] {
          align-self: center;
          margin: 0;
          min-width: 279px;
        }
      `}</style>
      <style jsx>{`
        .modal-overlay {
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          height: 100vh;
          left: 0;
          overflow-x: hidden;
          position: fixed;
          top: 0;
          width: 100vw;
          z-index: 2;
        }

        .form-container {
          background-color: ${themeCtx.theme.searchBarBackgroundColor};
          border-radius: 6px;
          height: 217px;
          left: 24px;
          position: absolute;
          top: 225px;
          width: 327px;
        }

        .mobile-modal-content {
          align-items: center;
          display: flex;
          flex-direction: column;
        }

        .form-control {
          align-items: center;
          column-gap: 1rem;
          display: flex;
          height: 72px;
          padding-left: 1.5em;
          padding-right: 1.5em;
          width: 100%;

          &:not(:last-of-type) {
            border-bottom: 1px solid ${themeCtx.theme.searchBarBorderColor};
          }
        }

        ::placeholder {
          color: ${themeCtx.theme.searchBarPlaceholderColor};
        }

        input[type='text'] {
          background-color: transparent;
          border: none;
          color: ${themeCtx.theme.searchBarLabelColor};

          &:focus {
            outline-color: transparent;
            outline-style: solid;
          }
        }
        .checkbox {
          color: ${themeCtx.theme.searchBarLabelColor};
          column-gap: 1rem;
          display: grid;
          font-weight: var(--font-weight-bold);
          grid-template-columns: min-content auto;
        }

        .checkbox__input {
          display: grid;
          grid-template-areas: 'checkbox';

          > * {
            grid-area: checkbox;
          }

          input {
            height: 1em;
            opacity: 0;
            width: 1em;
          }
        }

        .checkbox__control {
          background-color: ${themeCtx.theme.searchBarCheckboxBackground};
          border-radius: 0.1875em;
          display: inline-grid;
          height: 1.5em;
          place-items: center;
          transition: transform 0.1s ease-in 25ms;
          width: 1.5em;

          & svg {
            transform-origin: bottom left;
            transform: scale(0);
            transition: transform 0.1s ease-in 25ms;
          }
        }

        .checkbox__input input:checked + .checkbox__control {
          background-color: ${themeCtx.theme
            .searchBarCheckboxCheckedBackground};
        }

        .checkbox__input input:hover + .checkbox__control {
          background-color: rgba(89, 100, 224, 0.25);
        }

        .checkbox__input input:checked + .checkbox__control svg {
          transform: scale(1);
        }

        .checkbox__input input:focus + .checkbox__control {
          box-shadow: 0 0 0 0.05em #fff,
            0 0 0.15em 0.1em
              ${themeCtx.theme.searchBarCheckboxCheckedBackground};
        }
      `}</style>
    </>
  )
}

export default MobileSearchModal
