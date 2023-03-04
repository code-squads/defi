import Head from "next/head";
import 'regenerator-runtime/runtime';
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

import { JUST_LOGGED_IN, ONBOARDING_ROUTE } from "../constants/routes";
import { MetamaskAuthProvider } from "../auth/authConfig";
import Navbar from "../components/Navbar/Navbar";

import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { getProfile } from "../apis/user";

export default function App({ Component, pageProps }) {
  const { push } = useRouter();
  // const {} = useToast();

  const TestProps = {
    hasAccount: (address) => {
      return new Promise((resolve, reject) => {
        console.log(`Checking if ${address} has an account ....`);
        
        getProfile(address)
          .then(profile => {
            console.log("Profile", profile);
            resolve({
              loggedIn: true,
              profile: {
                name: profile.name,
                address: profile.walletAddress,
              }
            });
          })
          .catch(err => {
            console.log(err);
            resolve({
              loggedIn: false,
              profile: null
            });
          });
      });
    },
    onConnected: () => {
      // Redirect to onboarding page here
      push(ONBOARDING_ROUTE);
    },
    onLoggedIn: () => {
      push(JUST_LOGGED_IN);
    },
    onCancelledConnection: () => {
      toast("Connection request cancelled !", { type: "error" });
    }
  };

  return (
    <>
      <Head>
        <title>SourceTrace</title>
        <meta name="description" content="Decentralized Supply chain tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MetamaskAuthProvider {...TestProps}>
        <Navbar />
        <Component {...pageProps} />
      </MetamaskAuthProvider>
      <ToastContainer />
    </>
  );
}