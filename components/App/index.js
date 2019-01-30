import React from 'react';
import NextApp, { Container } from 'next/app';
import styles from './styles';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <style jsx>{styles}</style>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default App;
