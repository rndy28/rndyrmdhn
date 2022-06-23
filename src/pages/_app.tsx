import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/GlobalStyle'
import 'styles/_normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
