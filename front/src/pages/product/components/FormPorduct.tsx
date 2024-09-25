import { FormEventHandler, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

const FormProduct = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {0
    e.preventDefault();

    let token = localStorage.getItem("token")

    const formValue = {
      name: name,
      description: description
    }

    try {
      const response = await api.post("products", formValue, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      toast.success("User created successfully!");
      console.log(response);
      
    } catch (err) {
      toast.error("An error occurred while creating the user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-md w-3/6 h-4/4 mx-auto mt-48">
      <h1 className="text-4xl font-semibold mb-4">Cadastro de Produto</h1>

      <div className="mb-4">
        <label className="block text-2xl font-medium text-gray-700 mt-8">Nome</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-8 mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-2xl font-medium text-gray-700 mt-8">Descrição</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-8 mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-2xl text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-6">
        Cadastrar
      </button>
    </form>
  );
};

export default FormProduct;
