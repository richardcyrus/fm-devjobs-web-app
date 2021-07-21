import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { ThemeContext } from '../context/ThemeContext'

import Button from './Button'
import MobileSearchModal from './MobileSearchModal'

const MobileSearchBar = ({
  onSubmit,
  handleFilterClick,
  isFilterModalOpen,
}) => {
  const themeCtx = useContext(ThemeContext)
  const { register, handleSubmit } = useFormContext()

  return (
    <>
      <div className="mobile-search-bar">
        <form id="mobile-search" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Filter by title&hellip;"
              {...register('position')}
            />
          </div>
          <div className="mobile-search-bar-controls">
            <Button
              type="button"
              data-button-role="mobile-filter-open"
              onClick={handleFilterClick}
            >
              <svg
                viewBox="0 0 20 20"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fill="#6E8098"
                  fillRule="nonzero"
                />
              </svg>
            </Button>
            <Button
              type="submit"
              variant="primary"
              data-button-role="mobile-search"
            >
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
            </Button>
          </div>
        </form>
      </div>
      {isFilterModalOpen ? <MobileSearchModal /> : null}
      <style jsx global>{`
        #main-content {
          button[data-button-role='mobile-filter-open'],
          button[data-button-role='mobile-search'] {
            margin: 0;
            min-width: 48px;
            min-height: 48px;
          }

          button[data-button-role='mobile-filter-open'] {
            margin-right: 0.5em;
          }

          button[data-button-role='mobile-filter-open'] path {
            fill: ${themeCtx.theme.filterButtonColor};
          }

          button[data-button-role='mobile-search'] path {
            fill: var(--color-secondary-white);
          }
        }
      `}</style>
      <style jsx>{`
        .mobile-search-bar {
          background-color: ${themeCtx.theme.searchBarBackgroundColor};
          border-radius: 6px;
          height: 80px;
          margin-top: -40px;
          width: 327px;
          padding-left: 1.5em;
          padding-right: 1em;
        }

        form {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .form-control {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .mobile-search-bar-controls {
          display: flex;
          align-items: center;
        }

        #position {
          width: 19ch;
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
      `}</style>
    </>
  )
}

export default MobileSearchBar
