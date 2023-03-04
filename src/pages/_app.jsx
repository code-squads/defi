import Head from "next/head";
import 'regenerator-runtime/runtime';
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }) {
  const { push } = useRouter();
  // const {} = useToast();

  return (
    <>
      <Head>
        <title>SourceTrace</title>
        <meta name="description" content="Decentralized Supply chain tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}