import Spline from "@splinetool/react-spline";
import Background from "../components/Background";
import Details from "../components/Details";

export default function App() {
  return (
    <div className="z-[-1] relative bg-[#12131A] ">
      <Background />
      <Details /> 
    </div>
  );
}