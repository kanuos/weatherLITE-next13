import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A minimalist weather app created using Next 13"
        />
        <meta name="author" content="Sounak Mukherjee" />
        <meta name="github" content="https://www.github.com/kanuos" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
