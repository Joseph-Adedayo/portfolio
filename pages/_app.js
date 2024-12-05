import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Joseph Adedayo</title>
      </Head>
      <Analytics />
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}
