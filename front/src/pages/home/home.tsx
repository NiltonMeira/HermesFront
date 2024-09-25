import Bar from "../../components/Bar/Bar";
import SideBar from "../../components/SideBar/SideBar";

export const Home = () => {
    return(
            <div className="flex flex-col h-screen">
                <Bar/>
                <div className="flex flex-grow">
                    <SideBar />
                    <main className="flex-grow p-4">
                        
                    </main>
                </div>
            </div>
        );
}