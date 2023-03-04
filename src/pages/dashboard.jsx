import DashLeft from "../components/DashLeft/DashLeft"
import DashRight from "../components/DashRight/DashRight"

const Dashboard = () => {
    return (
        <div className="flex flex-row h-[calc(100vh-55px)] bg-[#12131A]">
            <div className="w-[40%]">
                <DashLeft/>
            </div>
            <div className="w-[60%] box-border p-[30px] pr-[40px]">
                <DashRight>

                </DashRight>
            </div>
        </div>
    )
}

export default Dashboard