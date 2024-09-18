const SideBar = () => {
  return (
    <aside className="bg-white h-screen w-64 shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <ul className="mt-4">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">ICONE 1</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">ICONE 2</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">ICONE 3</li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;

