import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import Favicons from '../components/Favicons';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oswald:300,600"
            rel="stylesheet"
          />
          <link
            href="/static/fonts/fontello/css/fontello.css"
            rel="stylesheet"
          />
          <Favicons />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
