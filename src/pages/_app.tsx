import Header from 'components/organism/Header';
import type { AppProps } from 'next/app';
import { default as GlobalStyles } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyles />
    <Header />
    <Component {...pageProps} />
  </>;
}

export default MyApp;
