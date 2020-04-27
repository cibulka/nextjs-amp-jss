import React from 'react'
import Document, {
    Head, Html, Main, NextScript,
} from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: initialProps.styles,
      stylesJss: registry.toString()
    }
  }

  render() {
      const styles = `${this.props.styles} ${this.props.stylesJss}`;

      return (
        <Html>
          <Head>
            <style amp-custom dangerouslySetInnerHTML={{ __html: styles }} />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    );
  }
}
