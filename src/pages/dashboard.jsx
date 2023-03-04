import DashLeft from "../components/DashLeft/DashLeft"

const Dashboard = () => {
    return (
        <div className="flex flex-row h-[calc(100vh-55px)] bg-blue">
            <div className="w-[40%]">
                <DashLeft/>
            </div>
        </div>
    )
}

export default Dashboard