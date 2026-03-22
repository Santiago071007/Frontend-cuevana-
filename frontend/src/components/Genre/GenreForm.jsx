import React, { useState, useEffect } from 'react';
import { createGenre, updateGenre } from '../../services/genreService';

export default function GenreForm({ editGenre, onSave }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (editGenre) {
      setNombre(editGenre.nombre);
      setDescripcion(editGenre.descripcion);
    }
  }, [editGenre]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let genreData;
    if (editGenre) {
      const res = await updateGenre(editGenre.id, { nombre, descripcion });
      genreData = { ...editGenre, nombre, descripcion };
    } else {
      const res = await createGenre({ nombre, descripcion });
      genreData = { id: res.data.id, nombre, descripcion };
    }

    // Actualizamos la lista inmediatamente
    onSave(genreData);

    // Limpiamos el formulario
    setNombre('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
      />
      <button type="submit">{editGenre ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}