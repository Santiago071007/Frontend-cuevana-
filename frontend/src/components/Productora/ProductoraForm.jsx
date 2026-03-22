import React, { useState, useEffect } from 'react';
import { createProductora, updateProductora } from '../../services/productoraService';

export default function ProductoraForm({ editProductora, fetchProductoras }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [slogan, setSlogan] = useState('');
  const [estado, setEstado] = useState(1); // 1 = Activo, 0 = Inactivo

  // editar productora 
  useEffect(() => {
    if (editProductora) {
      setNombre(editProductora.nombre);
      setDescripcion(editProductora.descripcion);
      setSlogan(editProductora.slogan || '');
      setEstado(editProductora.estado);
    }
  }, [editProductora]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productoraData = {
      nombre,
      descripcion,
      slogan,
      estado,
    };

    if (editProductora) {
      await updateProductora(editProductora.id, productoraData);
    } else {
      await createProductora(productoraData);
    }

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setSlogan('');
    setEstado(1);

    fetchProductoras();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre de la productora"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        placeholder="Slogan"
        value={slogan}
        onChange={(e) => setSlogan(e.target.value)}
      />
      <select
        value={estado}
        onChange={(e) => setEstado(Number(e.target.value))}
      >
        <option value={1}>Activo</option>
        <option value={0}>Inactivo</option>
      </select>
      <button type="submit">{editProductora ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}