import Bar from "../components/Bar/Bar";
import FormComponent from "../components/Form/Form";
import SideBar from "../components/SideBar/SideBar";

const OperationPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Bar />
            <div className="flex flex-grow">
                <SideBar />
                <main className="flex-grow p-4">
                    <FormComponent />
                </main>
            </div>
        </div>
    );
};

export default OperationPage;
