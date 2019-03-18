import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { getServerSideToken, getUserScript } from 'lib/auth'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      const userData = await getServerSideToken(ctx.req)
      return {
        ...initialProps,
        styles: <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>,
        ...userData
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { user = {} } = this.props
    return (
      <html>
        <Head />
        <body>
          <Main />
          {console.log('getUserScript: ', getUserScript(user))}
          <script dangerouslySetInnerHTML={{__html: getUserScript(user)}} />
          <NextScript />
        </body>
      </html>
    )
  }
}