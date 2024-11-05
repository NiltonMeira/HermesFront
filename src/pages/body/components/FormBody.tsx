import React, { useState } from 'react';

const FormBody = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    partNumber: '',
    partNumberReman: '',
    isReman: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-md w-3/6 h-4/4 mx-auto mt-48">
      <h1 className="text-4xl font-semibold mb-4">Cadastro de Corpo de Peça</h1>

      <div className="mb-4">
        <label className="block text-2xl font-medium text-gray-700 mt-8">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="h-8 mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-2xl font-medium text-gray-700 mt-8">Descrição</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="h-8 mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-2xl font-medium text-gray-700 mt-8">Número da Peça</label>
        <input
          type="text"
          name="partNumber"
          value={formData.partNumber}
          onChange={handleChange}
          className="h-8 mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-2xl font-medium text-gray-700 mt-8">Número da Peça Remanufaturada</label>
        <input
          type="text"
          name="partNumberReman"
          value={formData.partNumberReman}
          onChange={handleChange}
          className="h-8 mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="isReman"
          checked={formData.isReman}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-2xl font-medium text-gray-700">Peça Remanufaturada</label>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-2xl text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-6">
        Cadastrar
      </button>
    </form>
  );
};

export default FormBody;
