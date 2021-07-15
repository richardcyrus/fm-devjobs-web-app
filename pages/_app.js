import { ThemeContextProvider } from '../util/store'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContextProvider>
  )
}

export default MyApp
