import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div class='bg-blue-500 p-3 flex flex-row items-center gap-5'>
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <h1>Canada Line Route</h1>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
