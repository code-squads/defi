import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useMetamaskAuth } from "../../auth/authConfig";
import { LANDING_PAGE, ONBOARDING_ROUTE } from "../../constants/routes";

const Navbar = () => {
  const { connect, isLoggedIn, metaState, isProcessingLogin } = useMetamaskAuth();
  const router = useRouter();

  function disconnect() {
    // Not sure how to do this yet :/
    toast("Disconnected 🚧", { type: "error" });
}

  return (
    <div className="flex flex-row items-center w-[100%] h-[55px] px-[50px] box-border border-b-[1.2px] font-inter text-[24px] border-[#E1E1E1] bg-[#12131A] text-white cursor-pointer">
      <div className="h-[30px] w-[30px] bg-yellow-200 mr-[15px]"></div>
      <Link href={LANDING_PAGE}>AppName</Link>

      <div className="flex flex-row gap-x-[60px] ml-auto text-[14px] font-medium font-inter text-white">
        {!isProcessingLogin ? (
          isLoggedIn ? (
            <button
              className="bg-white py-[8px] px-[24px] rounded-lg text-gray-600"
              onClick={disconnect}
            >
              Disconnect
            </button>
          ) : metaState?.isConnected ? (
            <Link
              href={ONBOARDING_ROUTE}
              className="bg-green-700 py-[8px] px-[24px] rounded-lg text-white"
              onClick={connect}
            >
              Complete Registration
            </Link>
          ) : (
            <button
              className="bg-blue py-[8px] px-[24px] rounded-lg text-white"
              onClick={connect}
            >
              Connect
            </button>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;