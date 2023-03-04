import { useMetamaskAuth, withAuthenticatedRoute } from "../auth/authConfig";
import DashLeft from "../components/DashLeft/DashLeft"
import DashRight from "../components/DashRight/DashRight"
import Loader from "../components/Loader/Loader";

const Dashboard = () => {
    const { profile, isProcessingLogin } = useMetamaskAuth();
    
    // if(isProcessingLogin || !profile){
    //     return <Loader size='80px' />
    // }
    
    return (
        <div className="flex flex-row h-[calc(100vh-55px)] bg-[#12131A] overflow-hidden box-borderr">
            <div className="w-[40%]">
                <DashLeft/>
            </div>
            <div className="w-[60%] box-border p-[30px] pr-[40px] overflow-hidden">
                <DashRight>

                </DashRight>
            </div>
        </div>
    )
}

export default Dashboard
// export default withAuthenticatedRoute(Dashboard);