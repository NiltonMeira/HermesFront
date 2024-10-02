import Bar from "../../components/Bar/Bar"
import SideBar from "../../components/SideBar/SideBar"
import { UserTable } from "./components/userTable"

export const UserPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Bar />
                <div className="flex flex-grow">
                    <SideBar />
                    <main className="flex-grow p-4">
                        <UserTable/>
                    </main>
                </div> 
            </div>
        </>
    )
}