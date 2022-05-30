import { NextPage } from 'next'
import { AppProps } from '../node_modules/next/dist/shared/lib/router/router'
import '../styles/globals.css'


type NexPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NexPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
