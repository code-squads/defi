import Head from "next/head";
import Background from "../components/Background";
import { DashImg } from "../components/DashImg";
import Details from "../components/Details";
import ParaImg from "../components/ParaImg";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DeFi</title>
        <meta name="description" content="DeFi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <center>
        {/* <br /> */}
        <div className="z-[-1] relative bg-[#12131A] ">
          <Background />
          <Details />
          <ParaImg />
          <DashImg />
          <Footer />
        </div>
      </center>
    </>
  );
}
