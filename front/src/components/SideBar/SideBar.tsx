const SideBar = () => {
  return (
    <aside className="bg-white h-screen w-28 shadow-lg fixed">
      <div className="flex flex-col items-center justify-center h-full p-4">
      <img src="images/digiexfundo.png" alt="Logo" />
        <ul className="mt-4 space-y-4">
          <li>
            <button className="flex items-center justify-center w-full h-10 bg-transparent hover:bg-gray-200 rounded py-10">
              <img src="images/home.svg" alt="Home" />
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center w-full h-10 bg-transparent hover:bg-gray-200 rounded py-10">
              <img src="images/circle.svg" alt="Circle" />
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center w-full h-10 bg-transparent hover:bg-gray-200 rounded py-10">
              <img src="images/cart.svg" alt="Cart" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
