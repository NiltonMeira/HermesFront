import { Link } from "react-router-dom"

export const Operation = () => {
    return (
        <div className="flex justify-center items-center flex-col p-10 space-y-10">
            <h1 className="text-4xl font-bold text-gray-800">Operações</h1>

            <div className="grid grid-cols-3 gap-8">
                <Link
                    to={"../operation"}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Entrada</h2>
                    <img src="images/carrinho.png" className="w-20 mt-2" alt="Entrada" />
                </Link>
                <Link
                    to={"../operation"}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Saída</h2>
                    <img src="images/saida.png" className="w-20 mt-2" alt="Saída" />
                </Link>
                <Link
                    to={"../dashboard"}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <img src="images/dashboard.svg" className="w-20 mt-2" alt="Dashboard" />
                </Link>
            </div>

            <h1 className="text-4xl font-bold text-gray-800">Componentes</h1>

            <div className="grid grid-cols-3 gap-8">
                <Link
                    to={"../product"}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Produtos</h2>
                    <img src="images/CRIN.svg" className="w-20 mt-2" alt="Produtos" />
                </Link>
                <Link
                    to={""}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Famílias</h2>
                    <img src="images/family.svg" className="w-20 mt-2" alt="Famílias" />
                </Link>
                <Link
                    to={""}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Cores</h2>
                    <img src="images/CRIN.svg" className="w-20 mt-2" alt="Cores" />
                </Link>
                <Link
                    to={""}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Reman</h2>
                    <img src="images/reman.svg" className="w-20 mt-2" alt="Reman" />
                </Link>
                <Link
                    to={""}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Componentes</h2>
                    <img src="images/screw.svg" className="w-20 mt-2" alt="Componentes" />
                </Link>
                <Link
                    to={""}
                    className="flex flex-col items-center justify-center border-gray-300 border-2 rounded-xl w-40 h-40 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg"
                >
                    <h2 className="text-xl font-semibold">Corpos</h2>
                    <img src="images/CRIN.svg" className="w-20 mt-2" alt="Corpos" />
                </Link>
            </div>
        </div>
    )
}
