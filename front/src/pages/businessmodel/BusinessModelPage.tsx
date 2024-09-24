import Bar from "../../components/Bar/Bar";
import SideBar from "../../components/SideBar/SideBar";
import FormBusinessModel from "./components/FormBusinessModel";

const BusinessModelPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Bar />
            <div className="flex flex-grow">
                <SideBar />
                <main className="flex-grow p-4">
                    <FormBusinessModel />
                </main>
            </div>
        </div>
    );
};

export default BusinessModelPage;