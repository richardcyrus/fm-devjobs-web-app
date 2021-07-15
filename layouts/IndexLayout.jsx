import { useContext } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import { ThemeContext } from '../util/store'

const IndexLayout = ({ children }) => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Devjobs Web App | Frontend Mentor</title>
        <meta
          name="description"
          content="This is a solution to the Devjobs web app challenge on Frontend Mentor"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css"
        />
      </Head>
      <div className="page">
        <Header />
        <main id="main-content">{children}</main>
        <footer>
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              rel="noreferrer"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.richardcyrus.com">Richard Cyrus</a>.
          </div>
        </footer>
      </div>
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
            column-gap: 0.6875em;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 689px;
          }

          @media screen and (min-width: 75em) {
            column-gap: 1.875em;
            max-width: 1110px;
          }
        }
      `}</style>
    </>
  )
}

export const getLayout = (page) => <IndexLayout>{page}</IndexLayout>

export default IndexLayout
