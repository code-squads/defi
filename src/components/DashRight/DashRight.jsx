import { useState } from "react"
import Borrow from "../Borrow/Borrow"
import Lend from "../Lend/Lend"

const DashRight = () => {
    const [state, setState] = useState('borrow')

    return (
        <div className="bg-[#12131A] w-[100%] h-[100%]">
            <div className="flex flex-row gap-x-[10px] w-[200px] self-center bg-[#1C1E29] p-[5px] m-auto mb-[50px] rounded-md cursor-pointer">
                <div className={`w-[100px] rounded-md text-center ${state == 'borrow' ? "bg-[#696c80] transition-colors duration-200 ease-in-out" : "text-white"}`}
                    onClick={() => {setState('borrow')}}
                >
                    Borrow
                </div>
                <div className={`w-[100px] rounded-md text-center ${state == 'lend' ? "bg-[#696c80] transition-colors duration-200 ease-in-out" : "text-white"}`}
                    onClick={() => {setState('lend')}}
                >
                    Lend
                </div>
            </div>
            <div className="bg-[#1C1E29] w-[100%] h-auto rounded-xl">
                {
                    state == 'borrow' ?
                        <Borrow/>
                    :
                        <Lend/>
                }
            </div>
        </div>
    )
}

export default DashRight