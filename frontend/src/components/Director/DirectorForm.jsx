import React, { useState, useEffect } from 'react';
import { createDirector, updateDirector } from '../../services/directorService';

export default function DirectorForm({ editDirector, fetchDirectors }) {
  const [nombres, setNombres] = useState('');

  useEffect(() => {
    if (editDirector) {
      setNombres(editDirector.nombres);
    }
  }, [editDirector]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editDirector) {
      await updateDirector(editDirector.id, { nombres });
    } else {
      await createDirector({ nombres });
    }
    setNombres('');
    fetchDirectors();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombres del director"
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
        required
      />
      <button type="submit">{editDirector ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}