import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title> Joseph Adedayo </title>
        <meta
          name="description"
          content={
            "A passionate and creative Software Developer with a flair for Front-End Design"
          }
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="hide-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
