import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { ThemeContext } from '../util/store'

import Button from './Button'

const SearchBar = ({ onSubmit }) => {
  const themeCtx = useContext(ThemeContext)
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useFormContext()

  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <span className="icon">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                  fill="#5964E0"
                  fillRule="nonzero"
                />
              </svg>
            </span>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Filter by title&hellip;"
              {...register('position')}
            />
          </div>
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
            data-button-role="search"
            disabled={!isDirty}
          >
            Search
          </Button>
        </form>
      </div>
      <style jsx global>{`
        #main-content button[data-button-role='search'] {
          @media screen and (min-width: 48em) {
            align-self: center;
            margin-top: 0;
            margin-left: 1.75em;
            min-width: 5em;
          }

          @media screen and (min-width: 75em) {
            min-width: 7.6875em;
          }
        }
      `}</style>

      <style jsx>{`
        @media screen and (max-width: 74.9375em) {
          .only {
            display: none;
          }
        }

        .search-bar {
          background-color: ${themeCtx.theme.searchBarBackgroundColor};
          border-radius: 6px;
          height: 80px;
          margin-top: -40px;
          width: 327px;

          @media screen and (min-width: 48em) {
            width: 689px;
          }

          @media screen and (min-width: 75em) {
            width: 1110px;
          }
        }

        form {
          height: 100%;

          @media screen and (min-width: 48em) {
            align-items: center;
            display: flex;
            justify-content: space-around safe;
          }
        }

        .form-control {
          height: 100%;

          @media screen and (min-width: 48em) {
            align-items: center;
            column-gap: 1em;
            display: flex;
            justify-content: flex-start;
            padding-left: 1.5em;
            padding-right: 1.25em;

            &:not(:last-of-type) {
              border-right: 1px solid ${themeCtx.theme.searchBarBorderColor};
            }

            &:first-of-type {
              width: 222px;
            }

            &:nth-of-type(2) {
              width: 213px;
            }

            &:last-of-type {
              padding-left: 1.25em;
              padding-right: 0;
            }
          }

          @media screen and (min-width: 75em) {
            padding-left: 2em;
            padding-right: 2em;

            &:first-of-type {
              width: 463px;
            }

            &:nth-of-type(2) {
              width: 300px;
            }

            &:last-of-type {
              padding-left: 2em;
              padding-right: 0;
            }
          }
        }

        #position {
          @media screen and (min-width: 48em) {
            width: 14ch;
          }

          @media screen and (min-width: 75em) {
            width: 50ch;
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

export default SearchBar
