import Head from 'next/head'

import '../styles/fonts.scss'
import '../styles/global.scss'
import 'argon-design-system-react/src/assets/scss/argon-design-system-react.scss'

const App = ({ Component, pageProps }) => {
  return (<>
    <Head>
      <meta name="description" content="50 Jähriges Jubiläum der Negertalmusikanten" />
      <title>50 Jahre Negertalmusikanten</title>
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-300.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-300.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-regular.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-regular.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-600.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-600.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-700.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/open-sans-v18-latin-700.woff"
        as="font"
        crossOrigin=""
      />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default App
