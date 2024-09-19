const FormComponent = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-md w-96 mx-auto mt-10">
      <h1 className="text-lg font-semibold mb-4">Operação: 0001</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Número de tipo</label>
        <input 
          type="text" 
          value="F00R.J02.100" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">CódBar.</label>
          <input 
            type="text" 
            value="00000490101" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantidade</label>
          <input 
            type="text" 
            value="140" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Modelo de Negócio</label>
        <input 
          type="text" 
          value="xxxxxxxxxxxxxxxxxxxxxx" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <div className="mt-2 text-gray-500 text-xs">
          <p>MODELO 000001</p>
          <p>MODELO 000023</p>
          <p>MODELO 0005601</p>
        </div>
      </div>
      
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Cadastrar</button>
    </div>
  );
};

export default FormComponent;
