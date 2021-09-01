import React from "react";
import Head from "next/head";
import wrapper from "@/redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
