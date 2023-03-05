import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { borrowRequest } from "../../apis/lending"
import { useMetamaskAuth } from "../../auth/authConfig"

function collateralCalculator(loanAmount, repayDays){
    return (parseInt(loanAmount) + (parseInt(loanAmount)*(0.1*repayDays)/100))*0.000639 + 0.005;
}

const Borrow = () => {
    // const [eligible, setEligible] = useState(true)
    const [loanAmount, setLoanAmount] = useState(null)
    const [repayDays, setRepayDays] = useState(1)
    const [maticBalance, setMaticBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const { profile, isLoggedIn, isProcessingLogin } = useMetamaskAuth();

    console.log(maticBalance)


    const onConfirmBorrowClickHandler = (e) => {
        if(!profile)
            return;
        e.preventDefault()

        const totalRepayInUSDC = e.target.loanAmount.value + (e.target.loanAmount.value*(0.0356 * e.target.repayDays.value)/100)
        const requiredCollateralInUSDT = totalRepayInUSDC + totalRepayInUSDC * 150/100

        console.log(totalRepayInUSDC, requiredCollateralInUSDT)

        console.log("Borrow with fields", {
            address: profile.address,
            eth: collateralCalculator(loanAmount, repayDays),
            loanAmount,
            repayDays
        });
        borrowRequest(
            profile.address,
            collateralCalculator(loanAmount, repayDays),
            loanAmount,
            repayDays
        ).then(() => {
            toast.success("Borrow request is successfuly registered", { autoClose: 900 });
            setTimeout(() => window.location.reload(), 1000);
        }).catch(err => {
            toast.error("Metamask request rejected");
        })
        // loans.push(Loan({
        //     // loanId: loanId,
        //     // borrower: msg.sender,
        //     // lender: address(0),
        //     loanAmount: Number(e.target.loanAmount.value),
        //     repayDays: Number(e.target.repayDays.value),
        //     // loanGrantedTime: 0,
        //     // payableDeadline: 0,
        //     // collateralAmount: msg.value,
        //     // loanApproved: false,
        //     // loanRepayed: false
        // }));
    }

    useEffect(() => {
        if(!profile)  return;
        getMaticBalance(profile.address)
          .then(setMaticBalance);
        getUsdtBalance(profile.address)
          .then(setUsdtBalance);
      }, [profile]);

    // console.log(loanAmount, loanAmount, repayDays)
    // console.log("interest"+( (parseInt(loanAmount) + (parseInt(loanAmount)*(0.1*repayDays)/100))*0.000639))

    const eligible =  maticBalance > collateralCalculator(loanAmount, repayDays);

    return (
        <form className="flex flex-col gap-y-[30px] w-[100%] h-[100%] text-white p-[20px] px-[30px] text-inter" onSubmit={onConfirmBorrowClickHandler}>
            <div className="flex flex-row items-center">
                <div className="font-inter text-[16px] font-medium">
                    Loan amount:
                </div>

                <input value={loanAmount} onChange={(e) => setLoanAmount(e?.target.value)} name="loanAmount" className="ml-auto bg-transparent text-right text-[#696c80] font-medium outline-none" placeholder="0.00" />
                <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[25px] bg-[#404557]">
                    <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                    USDT
                </div>
            </div>

            <div className="flex flex-row items-center">
                
                <div className="font-inter text-[16px] font-medium">Expected repay duration:</div>
                <input value={repayDays} onChange={(e) => setRepayDays(e?.target.value)} name="repayDays" className="ml-auto bg-transparent text-right text-[#696c80] font-medium mr-[10px] outline-none" placeholder="0" />
                <div>days</div>

            </div>

            <div className="flex flex-row items-center">
                
                <div className="font-inter text-[16px] font-medium">Interest %:</div>
                <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium mr-[10px] outline-none">36%</div>
                <div>APR</div>

            </div>

            <div className="flex flex-row items-center">
                
                <div className="font-inter text-[16px] font-medium">Interest Amount:</div>
                <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">{(loanAmount*(0.1*repayDays)/100).toFixed(2)}</div>
                <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                    <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                    USDT
                </div>

            </div>

            <div className="flex flex-row items-center">
                
                <div className="font-inter text-[16px] font-medium">Required collateral:</div>
                <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">
                    {
                        loanAmount ? collateralCalculator(loanAmount, repayDays).toFixed(4) : 0
                    }
                </div>
                <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                    <div className="flex justify-center w-[30px] h-[30px] rounded-full bg-white p-[4px] box-border">
                        <img src="./assets/matic.svg" alt="maticLogo"/>
                    </div>
                    MATIC
                </div>
            </div>

            {eligible && 
                <div className="text-slate-300 text-center">
                Congratulations 🎉 you are eligible for borrowing
                </div>
            }

            <button
                type="submit"
                disabled={!eligible}
                className={`bg-blue py-[8px] px-[24px] rounded-lg text-white justify-center self-center font-inter font-medium ${!eligible && "opacity-50 cursor-not-allowed"}`}
            >
                Confirm Borrow
            </button>

            <div className="flex flex-row items-center gap-x-[5px] font-[300] text-gray-400 text-[12px] self-center mt-[-10px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                on conforming collateral amount will be deducted from your account
            </div>
        </form>
    )
}

export default Borrow