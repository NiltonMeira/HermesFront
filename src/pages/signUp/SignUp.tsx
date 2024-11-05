import Bar from "../../components/Bar/Bar"
import SideBar from "../../components/SideBar/SideBar"
import FormUser from "../createUser/components/userForm"
import FormSignUp from "./components/FormSignUp"

export const SignUp = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Bar />
                <div className="flex flex-grow">
                    <SideBar />
                    <main className="flex-grow p-4">
                        <FormSignUp />
                    </main>
                </div>
            </div>
        </>
    )
}