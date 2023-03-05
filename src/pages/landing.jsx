import Spline from "@splinetool/react-spline";
import Background from "../components/Background";
import { DashImg } from "../components/DashImg";
import Details from "../components/Details";
import ParaImg from "../components/ParaImg";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="z-[-1] relative bg-[#12131A] ">
      <Background />
      <Details />
      <ParaImg />
      <DashImg />
      <Footer />
    </div>
  );
}
