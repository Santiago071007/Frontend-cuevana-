import React, { useState, useEffect } from 'react';
import { createTipo, updateTipo } from '../../services/tipoService';

export default function TipoForm({ editTipo, fetchTipos }) {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    if (editTipo) setNombre(editTipo.nombre);
  }, [editTipo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editTipo) await updateTipo(editTipo.id, { nombre });
    else await createTipo({ nombre });
    setNombre('');
    fetchTipos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre del tipo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <button type="submit">{editTipo ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}