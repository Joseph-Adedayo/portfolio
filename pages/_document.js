import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/Gilroy-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Gilroy-Extrabold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Gilroy-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta
          name="description"
          content="A passionate and creative Software Developer with a flair for Front-End Design"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="hide-scrollbar font-gilroysemibold">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
