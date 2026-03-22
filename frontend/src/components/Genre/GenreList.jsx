import React, { useEffect, useState } from 'react';
import { getGenres, deleteGenre } from '../../services/genreService';
import GenreForm from './GenreForm';

export default function GenreList() {
  const [genres, setGenres] = useState([]);
  const [editGenre, setEditGenre] = useState(null);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const res = await getGenres();
      setGenres(res.data);
    } catch (err) {
      console.error('Error al traer géneros:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGenre(id);
      // Eliminamos el género del estado inmediatamente
      setGenres(genres.filter(g => g.id !== id));
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
  };

  const handleUpdateOrAdd = (genre) => {
    if (editGenre) {
      // Si estamos editando, reemplazamos el género en el estado
      setGenres(genres.map(g => g.id === genre.id ? genre : g));
      setEditGenre(null);
    } else {
      // Si es nuevo, lo agregamos al estado
      setGenres([...genres, genre]);
    }
  };

  return (
    <div>
      <h2>Géneros</h2>
      <GenreForm 
        editGenre={editGenre} 
        onSave={handleUpdateOrAdd} 
      />
      <ul>
        {genres.map(g => (
          <li key={g.id}>
            {g.nombre} ({g.descripcion})
            <button onClick={() => setEditGenre(g)}>Editar</button>
            <button onClick={() => handleDelete(g.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}