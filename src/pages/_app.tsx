import Header from 'components/organism/Header';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { default as GlobalStyles } from 'styles';
import 'styles/_normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyles />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>;
}

export default MyApp;
