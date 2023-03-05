import moment from "moment"
import { useEffect, useState } from "react"
import { UsdtContract } from "../../apis/Contract"
import { CallerFn } from "../../apis/factory"
import { payLoan } from "../../apis/lending"
import { useMetamaskAuth } from "../../auth/authConfig"
import { contractAddress } from "../../contracts/deploymentDetails"
import { interestCalculator, storedTimeStampToDate, unitsToUsdt, weiToEth } from "../../util/units"

const MyBorrowings = () => {
    const [selectedLender, setselectedLender] = useState(null)
    const [myBorrowings, setMyBorrowings] = useState([])
    const { profile } = useMetamaskAuth();
    const profileAddress = profile?.address;


    const onConfirmLendClickHandler = () => {
        
    }

    const fetchMyBorrowRequests = () => {
        CallerFn('getLoans', true)
        .then((response) => {
            const newRespone = response.filter(data => data.borrower == profile.address && data.loanApproved == true);
            console.log(newRespone)
            setMyBorrowings(newRespone)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const onRepayClickHandler = (loan) => {
        if(!profile)
            return;

        const { loanId, loanAmount, loanGrantedTime } = loan;

        CallerFn('getInterestTillDate', true, loanId)
            .then(res => console.log("Got interest", res, parseInt(loanAmount)+parseInt(res)));

        const interactionBuffer = 100;
        const timeDiff = parseInt((new Date())/1000 + interactionBuffer - loanGrantedTime);
        // // (60 * 10 * 200_000000) / 1000 000
        // const interest = (parseInt(loanAmount)*(10*timeDiff)/1000000);
    
        const interest = interestCalculator(loanAmount, loanGrantedTime);
        const totalRepayAmountUnits = (parseInt(loanAmount) + interest);
        console.log("Confirm repay", {
            timeDiff,
            loan, loanId, interest, totalRepayAmountUnits
        });

        UsdtContract.methods.approve(contractAddress, totalRepayAmountUnits).send({ from: profile.address })
            .then((result) => {
                console.log('Token approval successful!');
                payLoan(profile.address, loanId)
                    .then(() => window.location.reload());
            })
            .catch((error) => {
                console.error('Token approval failed:', error);
            });
    }

    useEffect(() => {
        fetchMyBorrowRequests()
    }, [profileAddress]);

    return (
        <div className="flex flex-col gap-y-[30px] w-[100%] h-[100%] text-white p-[20px] px-[30px] text-inter">
            
            {!selectedLender && <div className="flex flex-col gap-y-[20px]">

                <div className=" font-inter text-[18px] font-medium border-b-[1px] pb-[10px] border-gray-400">
                    Borrowings
                </div>
            {
                myBorrowings.map((data, index) => {
                    let startDate = moment(Math.floor(new Date()))
                    let endDate = moment(storedTimeStampToDate(data.payableDeadline))
                    // let endDate = moment(storedTimeStampToDate(1677979314))

                    const daysRemaining = startDate.diff(endDate, 'days')
                    console.log(new Date(daysRemaining))
                    return (
                        <div className="flex flex-col  gap-y-[20px] font-inter" key={data.loanId+index}>
                            <div className="flex flex-row gap-x-[20px]">
                                <div className="">
                                {index+1}.
                                </div>
                                
                                <div className="flex flex-col gap-y-[5px]">
                                    <div className="flex flex-row items-center">
                                        {unitsToUsdt(data.loanAmount)}
                                        <img className="w-[20px] h-[20px] rounded-full ml-[5px]" src="./assets/usdc.svg" alt="usdcLogo"/>
                                    </div>
                                    <div className="text-gray-200 text-[10px] font-medium">{data.address}</div>
                                    <div className="text-[14px]">{daysRemaining} days <span className="text-gray-400 text-[12px] ml-[5px]">remaining to repay</span></div>
                                    <div className="flex flex-row items-center text-[14px]">
                                        <div>Collateral amount: </div>
                                        &nbsp;{weiToEth(data.collateralAmount).toFixed(4)}
                                        <div className="flex justify-center w-[20px] h-[20px] rounded-full bg-white p-[4px] box-border ml-[5px]">
                                            <img src="./assets/eth.png" alt="ethLogo"/>
                                        </div>
                                    </div>
                                </div>

                                {
                                    !data.loanRepayed &&
                                    <button
                                        type="submit"
                                        className="bg-blue py-[8px] px-[24px] ml-auto rounded-lg text-white font-inter font-medium self-start"
                                        onClick={() => {setselectedLender(data)}}
                                    >
                                        Repay
                                    </button>
                                }
                            </div>
                            {
                                index < myBorrowings.length-1 &&
                                <div className="h-[0.5px] self-center bg-gray-100 w-[100%] "></div>
                            }
                        </div>
                    )
                })
            }
            </div>}

            {
                selectedLender &&

                <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={() => {setselectedLender(null)}}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>


                    <div className="flex flex-row items-center">
                        <div className="font-inter text-[16px] font-medium">
                            Loan amount:
                        </div>

                        <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium outline-none">{unitsToUsdt(selectedLender.loanAmount)}</div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[25px] bg-[#404557]">
                            <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                            USDT
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="font-inter text-[16px] font-medium">Remaining days to Repay:</div>
                        <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium mr-[10px] outline-none">
                            {moment(Math.floor(new Date())).diff(storedTimeStampToDate(selectedLender.payableDeadline), 'days')}
                        </div>
                        <div>days</div>
                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Interest %:</div>
                        <div className="ml-auto bg-transparent text-right text-[#696c80] font-medium mr-[10px] outline-none">13%</div>
                        <div>APR</div>

                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Interest Amount:</div>
                        <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">
                            {/* {unitsToUsdt((parseInt(selectedLender.loanAmount)*(0.1*selectedLender.repayDays)/100)).toFixed(2)} */}
                            { unitsToUsdt(interestCalculator(selectedLender.loanAmount, selectedLender.loanGrantedTime)).toFixed(2) }
                        </div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                            <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                            USDT
                        </div>

                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Total Repay Amount:</div>
                        <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">  
                            {/* {unitsToUsdt(parseInt(selectedLender.loanAmount) + (parseInt(selectedLender.loanAmount)*(0.1*selectedLender.repayDays)/100)).toFixed(2)} */}
                            { unitsToUsdt(parseInt(selectedLender.loanAmount) + interestCalculator(selectedLender.loanAmount, selectedLender.loanGrantedTime)).toFixed(2) }
                        </div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                                <img className="w-[30px] h-[30px] rounded-full" src="./assets/usdc.svg" alt="usdcLogo"/>
                            USDT
                        </div>

                    </div>

                    <div className="flex flex-row items-center">
                        
                        <div className="font-inter text-[16px] font-medium">Collateral to be released</div>
                        <div className="ml-auto text-right text-[#696c80] font-medium mr-[10px]">{weiToEth(selectedLender.collateralAmount).toFixed(4)}</div>
                        <div className="flex flex-row items-center gap-x-[10px] text-[14px] text-white w-auto h-[40px] p-[5px] px-[8px] rounded-[20px] font-medium pr-[15px] ml-[10px] bg-[#404557]">
                            <div className="flex justify-center w-[30px] h-[30px] rounded-full bg-white p-[4px] box-border">
                                <img src="./assets/eth.png" alt="ethLogo"/>
                            </div>
                            ETH
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`bg-blue py-[8px] px-[24px] rounded-lg text-white justify-center self-center font-inter font-medium ${selectedLender.loanRepayed && "opacity-50 cursor-not-allowed"}`}
                        onClick={() => onRepayClickHandler(selectedLender)}
                        disabled={selectedLender.loanRepayed}
                    >
                        { console.log("moment", moment(Math.floor(new Date())).diff(storedTimeStampToDate(selectedLender.payableDeadline), 'days'), moment(Math.floor(new Date())).diff(storedTimeStampToDate(selectedLender.payableDeadline), 'days') > 0) }
                        Repay Now
                    </button>

                    <div className="flex flex-row items-center gap-x-[5px] font-[300] text-gray-400 text-[12px] self-center mt-[-10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        on conforming, amount will be deducted from your account
                    </div>
                </>
            }
        </div>
    )
}

export default MyBorrowings