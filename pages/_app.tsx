import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from 'react'
import "../styles/globals.css"

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
              <title>Hair Transplant</title>
              <meta name="description" content="Get your hair transplant today!" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
			<main className={montserrat.className}>
            <Component {...pageProps} />
			</main>
        </Fragment>
    );
}
