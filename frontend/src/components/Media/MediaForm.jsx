import React, { useState, useEffect } from 'react';
import { createMedia, updateMedia } from '../../services/mediaService';
import { getGenres } from '../../services/genreService';
import { getDirectors } from '../../services/directorService';
import { getProductoras } from '../../services/productoraService';
import { getTipos } from '../../services/tipoService';

export default function MediaForm({ editMedia, fetchMedia }) {
  const [titulo, setTitulo] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [anio_estreno, setAnioEstreno] = useState('');
  const [genero_id, setGeneroId] = useState('');
  const [director_id, setDirectorId] = useState('');
  const [productora_id, setProductoraId] = useState('');
  const [tipo_id, setTipoId] = useState('');

  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    if (editMedia) {
      setTitulo(editMedia.titulo);
      setSinopsis(editMedia.sinopsis);
      setAnioEstreno(editMedia.anio_estreno);
      setGeneroId(editMedia.genero_id);
      setDirectorId(editMedia.director_id);
      setProductoraId(editMedia.productora_id);
      setTipoId(editMedia.tipo_id);
    }
  }, [editMedia]);

  const fetchOptions = async () => {
    setGeneros((await getGenres()).data);
    setDirectores((await getDirectors()).data);
    setProductoras((await getProductoras()).data);
    setTipos((await getTipos()).data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { titulo, sinopsis, anio_estreno, genero_id, director_id, productora_id, tipo_id };
    if (editMedia) {
      await updateMedia(editMedia.id, data);
    } else {
      await createMedia(data);
    }
    setTitulo('');
    setSinopsis('');
    setAnioEstreno('');
    setGeneroId('');
    setDirectorId('');
    setProductoraId('');
    setTipoId('');
    fetchMedia();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      <input placeholder="Sinopsis" value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} />
      <input placeholder="Año de Estreno" value={anio_estreno} onChange={(e) => setAnioEstreno(e.target.value)} />

      <select value={genero_id} onChange={(e) => setGeneroId(e.target.value)} required>
        <option value="">Seleccione Género</option>
        {generos.map((g) => <option key={g.id} value={g.id}>{g.nombre}</option>)}
      </select>

      <select value={director_id} onChange={(e) => setDirectorId(e.target.value)} required>
        <option value="">Seleccione Director</option>
        {directores.map((d) => <option key={d.id} value={d.id}>{d.nombres}</option>)}
      </select>

      <select value={productora_id} onChange={(e) => setProductoraId(e.target.value)} required>
        <option value="">Seleccione Productora</option>
        {productoras.map((p) => <option key={p.id} value={p.id}>{p.nombre}</option>)}
      </select>

      <select value={tipo_id} onChange={(e) => setTipoId(e.target.value)} required>
        <option value="">Seleccione Tipo</option>
        {tipos.map((t) => <option key={t.id} value={t.id}>{t.nombre}</option>)}
      </select>

      <button type="submit">{editMedia ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}