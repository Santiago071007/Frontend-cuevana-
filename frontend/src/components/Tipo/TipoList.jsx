import React, { useEffect, useState } from 'react';
import { getTipos, deleteTipo } from '../../services/tipoService';
import TipoForm from './TipoForm';

export default function TipoList() {
  const [tipos, setTipos] = useState([]);
  const [editTipo, setEditTipo] = useState(null);

  useEffect(() => {
    fetchTipos(); // ✅ Solo llamas a la función, no retornas destroy
  }, []);

  const fetchTipos = async () => {
    const res = await getTipos();
    setTipos(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTipo(id);
    fetchTipos();
  };

  return (
    <div>
      <h2>Tipos</h2>
      <TipoForm editTipo={editTipo} fetchTipos={fetchTipos} />
      <ul>
        {tipos.map((t) => (
          <li key={t.id}>
            {t.nombre} ({t.descripcion})
            <button onClick={() => setEditTipo(t)}>Editar</button>
            <button onClick={() => handleDelete(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}