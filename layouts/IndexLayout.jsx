import { useContext } from 'react'

import { getLayout as getBaseLayout } from './BaseLayout'
import { ThemeContext } from '../context/ThemeContext'

const IndexLayout = ({ children }) => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <main id="main-content">{children}</main>
      <style jsx global>{`
        html,
        body,
        .page {
          background-color: ${themeCtx.theme.pageBackground};
        }
      `}</style>
      <style jsx>{`
        #main-content {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          max-width: 327px;

          @media screen and (min-width: 48em) {
            align-item: center;
            justify-content: center;
            max-width: 689px;
          }

          @media screen and (min-width: 75em) {
            max-width: 1110px;
          }
        }
      `}</style>
    </>
  )
}

export const getLayout = (page) =>
  getBaseLayout(<IndexLayout>{page}</IndexLayout>)

export default IndexLayout
