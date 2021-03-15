import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentOverride extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Source+Sans+Pro:wght@300&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-backgrounds-page'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentOverride
