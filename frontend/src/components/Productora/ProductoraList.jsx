import React, { useEffect, useState } from 'react';
import { getProductoras, deleteProductora } from '../../services/productoraService';
import ProductoraForm from './ProductoraForm';

export default function ProductoraList() {
  const [productoras, setProductoras] = useState([]);
  const [editProductora, setEditProductora] = useState(null);

  useEffect(() => {
    fetchProductoras();
  }, []);

  const fetchProductoras = async () => {
    const res = await getProductoras();
    setProductoras(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProductora(id);
    fetchProductoras();
  };

  return (
    <div>
      <h2>Productoras</h2>
      <ProductoraForm editProductora={editProductora} fetchProductoras={fetchProductoras} />
      <ul>
        {productoras.map((p) => (
          <li key={p.id}>
            {p.nombre} ({p.descripcion})
            <button onClick={() => setEditProductora(p)}>Editar</button>
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}