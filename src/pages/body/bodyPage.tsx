import Bar from "../../components/Bar/Bar";
import SideBar from "../../components/SideBar/SideBar";
import FormBody from "./components/FormBody";

const BodyPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Bar />
            <div className="flex flex-grow">
                <SideBar />
                <main className="flex-grow p-4">
                    <FormBody />
                </main>
            </div>
        </div>
    );
};

export default BodyPage;
