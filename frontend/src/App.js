
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GenreList from './components/Genre/GenreList';
import DirectorList from './components/Director/DirectorList';
import ProductoraList from './components/Productora/ProductoraList';
import TipoList from './components/Tipo/TipoList';
import MediaList from './components/Media/MediaList';
import './App.css';

// URL del backend en producción
const API_URL = "https://tu-backend.onrender.com";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Plataforma de Películas</h1>
          <nav>
            <Link to="/genres">Géneros</Link> |{' '}
            <Link to="/directors">Directores</Link> |{' '}
            <Link to="/productoras">Productoras</Link> |{' '}
            <Link to="/tipos">Tipos</Link> |{' '}
            <Link to="/media">Media</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/genres" element={<GenreList apiUrl={API_URL} />} />
            <Route path="/directors" element={<DirectorList apiUrl={API_URL} />} />
            <Route path="/productoras" element={<ProductoraList apiUrl={API_URL} />} />
            <Route path="/tipos" element={<TipoList apiUrl={API_URL} />} />
            <Route path="/media" element={<MediaList apiUrl={API_URL} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;