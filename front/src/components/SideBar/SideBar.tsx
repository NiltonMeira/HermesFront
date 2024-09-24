import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="bg-white h-screen w-28 shadow-lg flex flex-col">
      <div className="pt-4">
        <Link to="/">
          <img src="images/digiexfundo.png" alt="Logo" />
        </Link>
      </div>
      {/* Espaço vazio para empurrar os botões para o meio */}
      <div className="flex-grow flex items-center justify-center">
        <ul className="space-y-7">
          <li>
            {/* esse link faz a logo retornar para a home */}
            <Link to="/"> 
              <button className="pb-10 flex items-center justify-center w-full h-10 bg-transparent hover:bg-gray-200 rounded">
                <img src="images/home.svg" alt="Home" />
              </button>
            </Link>
          </li>
          <li>
            <button className="py-10 flex items-center justify-center w-full h-10 bg-transparent hover:bg-gray-200 rounded">
              <img src="images/circle.svg" alt="Circle" />
            </button>
          </li>
          <li>
            <button className="py-10 flex items-center justify-center w-full h-10 bg-transparent hover:bg-gray-200 rounded">
              <img src="images/cart.svg" alt="Cart" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
