import Spline from "@splinetool/react-spline";
import landingImg from "../assets/landingImg.jpg";
import lendingSs from "../assets/lendingSs.jpeg";
import Image from "next/Image";

export default function App() {
  return (
    <div className="z-[-1] relative h-screen bg-[#12131A]">
      <div className="z-[0] absolute top-0 h-screen w-screen  ">
        <Spline
          scene="https://prod.spline.design/R7u20LxCiHGFBQGE/scene.splinecode"
          className="z-[0]"
        />
      </div>

      <div className="flex flex-row items-center ">
        <div className="z-[2] w-1/2 flex-1 m-16 relative font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#362DB5] to-[#A047B0]">
          lorejbafba jhaifbaiufgba jafb afaoi
        </div>
        <div className="z-[2] w-1/2 flex-1 m-16 mr-10 relative">
          <Image
            src={lendingSs}
            alt="gg"
            className=" h-5/6 w-5/6  opacity-75 drop-shadow-xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
