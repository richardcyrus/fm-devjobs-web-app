import { useContext } from 'react'
import { ThemeContext } from '../util/store'

const Button = ({ variant, children, onClick, ...props }) => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <button
        className={`button ${variant !== '' ? 'button-' + variant : null}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        $button-primary-color: rgb(89, 100, 224);
        $button-primary-hover-background: #939bf4;
        $button-secondary-background-color: ${themeCtx.theme
          .buttonSecondaryBackgroundColor};
        $button-secondary-hover-background: ${themeCtx.theme
          .buttonSecondaryHoverColor};

        .button {
          align-items: center;
          align-self: start;
          border-radius: 5px;
          display: inline-flex;
          font-weight: var(--font-weight-bold);
          justify-content: center;
          min-height: 48px;
          min-width: 141px;
          text-align: center;
          transition: 220ms all ease-in-out;

          &:disabled {
            opacity: 0.2;
          }

          &:focus {
            outline-color: transparent;
            outline-style: solid;
          }

          &--block {
            width: 100%;
          }

          &:hover,
          &:active {
            background-color: $button-primary-hover-background;
          }

          &:focus {
            box-shadow: 0 0 0 2px
              scale-color($button-primary-color, $lightness: -40%);
          }

          &-primary {
            background-color: $button-primary-color;
            color: var(--color-secondary-white);

            &:hover,
            &:active {
              background-color: $button-primary-hover-background;
            }

            &:focus {
              box-shadow: 0 0 0 2px
                scale-color($button-primary-color, $lightness: -40%);
            }
          }

          &-secondary {
            background-color: $button-secondary-background-color;
            color: $button-primary-color;

            &:hover,
            &:active {
              background-color: $button-secondary-hover-background;
            }

            &:focus {
              box-shadow: 0 0 0 2px
                scale-color($button-primary-color, $lightness: -40%);
            }
          }
        }
      `}</style>
    </>
  )
}

export default Button
