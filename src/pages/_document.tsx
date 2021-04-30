import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentOverride extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentOverride
