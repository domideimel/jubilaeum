import 'argon-design-system-react/src/assets/scss/argon-design-system-react.scss';
import Head from 'next/head';
import Header from '../components/Header';

import { AppWrapper } from '../context';

import '../styles/fonts.scss';

const App = ({
  Component,
  pageProps
}) => {
  return (<AppWrapper>
    <Head>
      <meta name="description" content="Negertalmusikanten Siedlinghausen" />
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
    <Header />
    <Component {...pageProps} />
  </AppWrapper>);
};

export default App;
