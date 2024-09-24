import Bar from "../../components/Bar/Bar"
import SideBar from "../../components/SideBar/SideBar"
import FormUser from "./components/userForm"

export const User = () => {
    return(
        <>  
            <div className="">
                <Bar/>
                <div className="flex content-center ">
                <SideBar/>
                <FormUser/>
                </div>
            </div>

            
        </>
    )
}