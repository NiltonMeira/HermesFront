import Bar from "../../components/Bar/Bar"
import SideBar from "../../components/SideBar/SideBar"
import { Graph } from "./components/graphic"

export const Dashboard = () => {
    return(
        <>
         <div className="flex flex-col h-screen">
            <Bar />
            <div className="flex flex-grow">
                <SideBar />
                <main className="flex-grow p-4 items-center justify-center">
                    <Graph/>
                </main>
            </div>
        </div>
        </>
    )
}