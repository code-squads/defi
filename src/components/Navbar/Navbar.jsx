import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useMetamaskAuth } from "../../auth/authConfig";
import { LANDING_PAGE, ONBOARDING_ROUTE } from "../../constants/routes";

const Navbar = () => {
  const { connect, isLoggedIn, metaState, isProcessingLogin } = useMetamaskAuth();
  const router = useRouter();
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(router.pathname)
  }, [router])

  // function disconnect() {
  //   // Not sure how to do this yet :/
  //   toast("Disconnected 🚧", { type: "error" });
  // }

  return (
    <div className="flex flex-row items-center w-[100%] h-[55px] px-[50px] box-border font-inter text-[24px] bg-[#12131A] text-white cursor-pointer">
      <img src="/assets/logo.svg" className="h-[25px] w-[25px] mr-[15px]"/>
      <Link href={"/dashboard"}>DeFi</Link>

      <div className="flex flex-row items-center gap-x-[60px] ml-auto text-[14px] font-medium font-inter text-white">
        {pathname == '/dashboard' 
          ?
            <Link href={"/myaccount"} className="text-[16px] font-[500] text-white">My Account</Link>
          :
            <Link href={"/dashboard"} className="text-[16px] font-[500] text-white">My Dashboard</Link>
        }

        {!isProcessingLogin ? (
          isLoggedIn ? (
            <>
              {/* <button
                className="bg-white py-[8px] px-[24px] rounded-lg text-gray-600"
                onClick={disconnect}
              >
                Disconnect
              </button> */}
            </>
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