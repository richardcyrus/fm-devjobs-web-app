import { useContext } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import { ThemeContext } from '../context/ThemeContext'

const BaseLayout = ({ children }) => {
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
        {children}
      </div>
      <style jsx global>{`
        html,
        body,
        .page {
          background-color: ${themeCtx.theme.pageBackground};
        }
      `}</style>
    </>
  )
}

export const getLayout = (page) => <BaseLayout>{page}</BaseLayout>

export default BaseLayout
