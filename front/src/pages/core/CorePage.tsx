import Bar from "../../components/Bar/Bar";
import SideBar from "../../components/SideBar/SideBar";
import FormCore from "./components/FormCore";

const CorePage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Bar />
            <div className="flex flex-grow">
                <SideBar />
                <main className="flex-grow p-4">
                    <FormCore/>
                </main>
            </div>
        </div>
    );
};

export default CorePage;