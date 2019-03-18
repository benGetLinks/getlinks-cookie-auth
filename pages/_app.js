import Head from 'next/head'
import App, { Container } from 'next/app'
import { GlobalCss } from 'getlinks-ui'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalCss />
        <Component {...pageProps} />
      </Container>
    )
  }
}
