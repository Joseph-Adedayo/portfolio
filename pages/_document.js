import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Gilroy-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Extrabold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="A passionate and creative Software Developer with a flair for Front-End Design"
        />

        <meta property="og:title" content="Joseph Adedayo" />
        <meta
          property="og:description"
          content="A passionate and creative Software Developer with a flair for Front-End Design"
        />
        <meta
          property="og:image"
          content="https://www.josephadedayo.com/joe.jpg"
        />
        <meta property="og:url" content="https://www.josephadedayo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Joseph Adedayo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joseph Adedayo" />
        <meta
          name="twitter:description"
          content="A passionate and creative Software Developer with a flair for Front-End Design"
        />
        <meta
          name="twitter:image"
          content="https://www.josephadedayo.com/joe.jpg"
        />
        <meta name="twitter:url" content="https://www.josephadedayo.com/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/joseph.png" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="hide-scrollbar font-gilroysemibold bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
