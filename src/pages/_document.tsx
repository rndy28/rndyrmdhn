import Document, { Html, Head, Main, NextScript, DocumentContext, } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { NextComponentType } from 'next';
import { AppInitialProps } from 'next/app';
import { AppContextType, AppPropsType } from 'next/dist/shared/lib/utils';


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentsSheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App: NextComponentType<AppContextType, AppInitialProps, AppPropsType>) => (props: any) => styledComponentsSheet.collectStyles(<App {...props} />)
            });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {styledComponentsSheet.getStyleElement()}
                    </React.Fragment>
                )
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name='theme-color' content='#D8DEE9' />
                    <meta name="google-site-verification" content="Y60QX0WsFBGoGn7vnSEdRZUMewKr4A8BSLlMAfl5W4k" />
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
}

export default MyDocument;