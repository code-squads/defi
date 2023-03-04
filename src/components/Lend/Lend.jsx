import { useState } from "react"

const TEMP = [
    {
        amount: '5000.00',
        address: '0x65e0D3DB067222AfE5FAD1Ff60ebF29bE4cF6207',
        repay: '10',
        collateralAmt: '5000'
    },
    {
        amount: '2300.00',
        address: '0x65e0D3DB067222AfE5FAD1Ff60ebF29bE4cF6207',
        repay: '10',
        collateralAmt: '5000'
    },
    {
        amount: '450.00',
        address: '0x65e0D3DB067222AfE5FAD1Ff60ebF29bE4cF6207',
        repay: '10',
        collateralAmt: '5000'
    },
    {
        amount: '450.00',
        address: '0x65e0D3DB067222AfE5FAD1Ff60ebF29bE4cF6207',
        repay: '10',
        collateralAmt: '5000'
    }
]
const Lend = () => {
    const [selectedBorrower, setSelectedBorrower] = useState(null)

    return (
        <div className="flex flex-col gap-y-[30px] w-[100%] h-[100%] text-white p-[20px] px-[30px] text-inter">
            
            {!selectedBorrower && <div className="flex flex-col gap-y-[20px]">
            {
                TEMP.map((data, index) => {
                    return (
                        <div className="flex flex-col  gap-y-[20px] font-inter">
                            <div className="flex flex-row gap-x-[20px]">
                                <div className="">
                                {index+1}.
                                </div>
                                
                                <div className="flex flex-col gap-y-[5px]">
                                    <div className="flex flex-row items-center">
                                        {data.amount}
                                        <img className="w-[20px] h-[20px] rounded-full ml-[5px]" src="./assets/usdc.svg" alt="usdcLogo"/>
                                    </div>
                                    <div className="text-gray-200 text-[10px] font-medium">{data.address}</div>
                                    <div className="text-[14px]">{data.repay} days</div>
                                    <div className="flex flex-row items-center text-[14px]">
                                        <div>Collateral amount: </div>
                                        &nbsp;{data.collateralAmt}
                                        <div className="flex justify-center w-[20px] h-[20px] rounded-full bg-white p-[4px] box-border ml-[5px]">
                                            <img src="./assets/matic.svg" alt="maticLogo"/>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue py-[8px] px-[24px] ml-auto rounded-lg text-white font-inter font-medium self-start"
                                    onClick={() => {setSelectedBorrower(data)}}
                                >
                                    Lend
                                </button>
                            </div>
                            {
                                index <= TEMP.length &&
                                <div className="h-[0.5px] self-center bg-gray-100 w-[100%] "></div>}
                        </div>
                    )
                })
            }
            </div>}

            {
                selectedBorrower &&

                <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={() => {setSelectedBorrower(null)}}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>


                    <div className="flex flex-row items-center">
                        <div className="font-inter text-[16px] font-medium">
                            Loan amount:
                        </div>

                        <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium outline-none">{selectedBorrower.amount}</div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[25px] bg-[#404557]">
                            <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                            USDC
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="font-inter text-[16px] font-medium">Expected repay duration:</div>
                        <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium mr-[10px] outline-none">{selectedBorrower.repay}</div>
                        <div>days</div>
                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Interest %:</div>
                        <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium mr-[10px] outline-none">13%</div>
                        <div>APR</div>

                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Interest Amount:</div>
                        <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">9999</div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                                <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                            USDC
                        </div>

                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Required collateral:</div>
                        <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">9999</div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                            <div className="flex justify-center w-[30px] h-[30px] rounded-full bg-white p-[4px] box-border">
                                <img src="./assets/matic.svg" alt="maticLogo"/>
                            </div>
                            MATIC
                        </div>
                    </div>

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
                        on conforming collateral amount will be deducted from your account
                    </div>
                </>
            }
            
            {/* <button
                type="submit"
                className="bg-blue py-[8px] px-[24px] rounded-lg text-white justify-center self-center font-inter font-medium"
            >
                Confirm Lend
            </button>

            <div className="flex flex-row items-center gap-x-[5px] font-[300] text-gray-400 text-[12px] self-center mt-[-10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                on conforming collateral amount will be deducted from your account</div> */}
        </div>
    )
}

export default Lend