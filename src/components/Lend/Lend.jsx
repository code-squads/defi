const Lend = () => {
    return (
        <div className="flex flex-col gap-y-[30px] w-[100%] h-[100%] text-white p-[20px] px-[30px] text-inter">
            
            <button
                type="submit"
                className="bg-blue py-[8px] px-[24px] rounded-lg text-white justify-center self-center font-inter font-medium"
            >
                Confirm Borrow
            </button>

            <div className="flex flex-row items-center gap-x-[5px] font-[300] text-gray-400 text-[12px] self-center mt-[-10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                on conforming collateral amount will be deducted from your account</div>
        </div>
    )
}

export default Lend