import { useState } from "react"
import Borrow from "../MyBorrowings/Borrow"
import Lend from "../MyLendings/Lend"

const MyAccountRight = () => {
    const [state, setState] = useState('myBorrowings')

    return (
        <div className="bg-[#12131A] w-[100%] h-[100%]">
            <div className="flex flex-row gap-x-[10px] w-[400px] self-center bg-[#1C1E29] p-[5px] m-auto mb-[50px] rounded-md cursor-pointer">
                <div className={`w-[200px] rounded-md text-center ${state == 'myBorrowings' ? "bg-[#696c80] transition-colors duration-200 ease-in-out" : "text-white"}`}
                    onClick={() => {setState('myBorrowings')}}
                >
                    My Borrowings
                </div>
                <div className={`w-[200px] rounded-md text-center ${state == 'myLendings' ? "bg-[#696c80] transition-colors duration-200 ease-in-out" : "text-white"}`}
                    onClick={() => {setState('myLendings')}}
                >
                    My Lendings
                </div>
            </div>
            <div className="bg-[#1C1E29] w-[100%] h-auto rounded-xl">
                {
                    state == 'myBorrowings' ?
                        <Borrow/>
                    :
                        <Lend/>
                }
            </div>
        </div>
    )
}

export default MyAccountRight