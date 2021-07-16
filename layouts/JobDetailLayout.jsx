import { useContext } from 'react'

import { getLayout as getBaseLayout } from './BaseLayout'
import { ThemeContext } from '../util/store'

const JobDetailLayout = ({ children }) => {
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
    </>
  )
}

export const getLayout = (page) =>
  getBaseLayout(<JobDetailLayout>{page}</JobDetailLayout>)

export default JobDetailLayout
