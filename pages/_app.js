import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Joseph Adedayo</title>
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
