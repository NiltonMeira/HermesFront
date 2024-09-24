import React, { useState } from 'react';

const FormUser
 = () => {
  const [formData, setFormData] = useState({
    numeroTipo: 'F00R.J02.100',
    codBar: '00000490101',
    quantidade: '140',
    modeloNegocio: '000001', // Valor inicial p o dropdown
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-md w-96 mx-auto mt-10 w-1/4">
      <h1 className="text-lg font-semibold text-3xl mb-4">Operação: 0001</h1>

      <div className="mb-4">
        <label className="block text-xl font-medium text-gray-700">Número de tipo</label>
        <input
          type="text"
          name="numeroTipo"
          value={formData.numeroTipo}
          onChange={handleChange}
          className="mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xl font-medium text-gray-700">CódBar.</label>
          <input
            type="text"
            name="codBar"
            value={formData.codBar}
            onChange={handleChange}
            className="mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Quantidade</label>
          <input
            type="text"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xl font-medium text-gray-700">Modelo de Negócio</label>
        <select
          name="modeloNegocio"
          value={formData.modeloNegocio}
          onChange={handleChange}
          className="mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="000001">MODELO 000001</option>
          <option value="000023">MODELO 000023</option>
          <option value="0005601">MODELO 0005601</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-xl text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default FormUser
;