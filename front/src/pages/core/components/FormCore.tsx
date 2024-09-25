import React, { FormEventHandler, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

const FormCore = () => {
  const [name, setName] = useState("")
  const [familyId, setFamilyId] = useState("")
  const [description, setDescription] = useState("")
  const [familyName, setFamilyName] = useState("")

  let token = localStorage.getItem("token")

  const getFamilyByName = async () => {
    try {
      const response = await api.get("family", {
        params: { productName: familyName },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(response.data[0].id);

      if (response.data && response.data.length > 0) {
        const product = response.data[0];
        const productId = product._id.$oid || product._id;
        setFamilyId(productId); // Atualiza o estado com o ID correto 
      } else {
        toast.error("Produto não encontrado");
      }

    } catch (error) {
      toast.error("Erro ao buscar o produto");
    }
  }
}

const handleSubmit: FormEventHandler<HTMLFormElement> = (e: React.FormEvent) => {
  e.preventDefault();

  const formvalue ={
    name: name,
    description:
  }
};

return (
  <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-md w-3/6 h-4/4 mx-auto mt-48">
    <h1 className="text-4xl font-semibold mb-4">Cadastro de Core</h1>

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
      <label className="block text-2xl font-medium text-gray-700 mt-8">ID da família</label>
      <input
        type="text"
        name="partNumber"
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

    <button type="submit" className="w-full bg-blue-500 text-2xl text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-6">
      Cadastrar
    </button>
  </form>
);
};

export default FormCore;
