import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
    return (
        <Html>
            <Head>
                <meta name='theme-color' content='#D8DEE9' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap" rel="stylesheet" />
            </Head>
            <body lang='en'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
