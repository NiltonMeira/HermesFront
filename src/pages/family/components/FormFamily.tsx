import { FormEventHandler, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

export const FormFamily = () => {

  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const [description, setDescription] = useState("");
  const [productName, setProductname] = useState("");

  const token = localStorage.getItem("token");

  const getProductByName = async () => {

    try {
      const response = await api.get("products", {
        params: { productName: productName },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response.data[0].id);
      
      if (response.data && response.data.length > 0) {
        const product = response.data[0];
        const productId = product._id.$oid || product._id;
        setProductId(productId); // Atualiza o estado com o ID correto 
      } else {
        toast.error("Produto não encontrado")
      }

    } catch (error) {
      toast.error("Erro ao buscar o produto")
      console.log(error)
      
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formValue = {
      name: name,
      productId: productId,
      description: description
    };

    try {
      const response = await api.post("family", formValue, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success("Family created successfully!");
      console.log(response);

    } catch (err) {
      toast.error("An error occurred while creating the family.");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-md w-3/6 h-4/4 mx-auto mt-48">
      <h1 className="text-4xl font-semibold mb-4">Cadastro de Família</h1>

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
        <label className="block text-2xl font-medium text-gray-700 mt-8">Nome do produto</label>
        <input
          type="text"
          name="productname"
          value={productName}
          onChange={(e) => setProductname(e.target.value)}
          onBlur={getProductByName} 
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
