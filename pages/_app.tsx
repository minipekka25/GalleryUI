import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import store from "../redux/store"
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Head>
        <title>Gallery UI</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
    </Provider>
  );
}

export default MyApp;
