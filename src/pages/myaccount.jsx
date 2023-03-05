import { withAuthenticatedRoute } from "../auth/authConfig"
import DashLeft from "../components/DashLeft/DashLeft"
import MyAccountRight from "../components/MyAccountRight/MyAccountRight"

const MyAccount = () => {
    return (
        <div className="flex flex-row h-[calc(100vh-55px)] bg-[#12131A]">
            <div className="w-[40%]">
                <DashLeft/>
            </div>
            <div className="w-[60%] box-border p-[30px] pr-[40px]">
                <MyAccountRight/>
            </div>
        </div>
    )
}

export default withAuthenticatedRoute(MyAccount);