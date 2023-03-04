import { useRouter } from "next/router";

const Navbar = () => {

  return (
    <div className="flex flex-row items-center w-[100%] h-[55px] px-[50px] box-border border-b-[1.2px] font-inter text-[24px] border-[#E1E1E1] text-black cursor-pointer">
      <div className="h-[30px] w-[30px] bg-yellow-200 mr-[15px]"></div>
      <span>DeFi</span>
      <div className="flex flex-row gap-x-[60px] ml-auto text-[14px] font-medium font-inter text-white">
        Connect
      </div>
    </div>
  );
};

export default Navbar;
