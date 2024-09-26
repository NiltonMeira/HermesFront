import { Link } from "react-router-dom"

export const Operation = () => {
    return (
        <div className="flex justify-center p-20 flex-col gap-7">
            <h1 className="text-3xl">Operações</h1>
            <div className="flex justify-center gap-5">
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Entrada</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Saída</h1>
                    <img src="images/saida.png" className="w-20" />
                </Link>
            </div>
            <h1 className="text-3xl">Componentes</h1>
            <div className="flex justify-center gap-5">
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Produtos</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Familias</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Cores</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Reman</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-xl">Componentes</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
                <Link
                    to={""}
                    className="flex justify-center flex-col items-center border-gray-500 border-2 rounded-md w-36 h-36 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-700"
                >
                    <h1 className="text-2xl">Corpos</h1>
                    <img src="images/carrinho.png" className="w-20" />
                </Link>
            </div>
        </div>
    )

}