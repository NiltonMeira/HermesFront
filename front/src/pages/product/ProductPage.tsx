import Bar from "../../components/Bar/Bar";
import SideBar from "../../components/SideBar/SideBar";
import FormProduct from "./components/FormPorduct";

const CorePage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Bar />
            <div className="flex flex-grow">
                <SideBar />
                <main className="flex-grow p-4">
                    <FormProduct />
                </main>
            </div>
        </div>
    );
};

export default CorePage;