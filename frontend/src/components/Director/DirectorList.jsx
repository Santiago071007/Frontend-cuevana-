import React, { useEffect, useState } from 'react';
import { getDirectors, deleteDirector } from '../../services/directorService';
import DirectorForm from './DirectorForm';

export default function DirectorList() {
  const [directors, setDirectors] = useState([]);
  const [editDirector, setEditDirector] = useState(null);

  useEffect(() => {
    fetchDirectors();
  }, []);

  const fetchDirectors = async () => {
  try {
    const res = await getDirectors();
    console.log("Directores recibidos:", res.data); 
    setDirectors(res.data);
  } catch (err) {
    console.error("Error al traer directores:", err); 
  }
};

  const handleDelete = async (id) => {
    await deleteDirector(id);
    fetchDirectors();
  };

  return (
    <div>
      <h2>Directores</h2>
      <DirectorForm editDirector={editDirector} fetchDirectors={fetchDirectors} />
      <ul>
        {directors.map((d) => (
          <li key={d.id}>
            {d.nombres}
            <button onClick={() => setEditDirector(d)}>Editar</button>
            <button onClick={() => handleDelete(d.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}