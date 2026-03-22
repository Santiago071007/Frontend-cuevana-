import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GenreList from './components/Genre/GenreList';
import DirectorList from './components/Director/DirectorList';
import ProductoraList from './components/Productora/ProductoraList';
import TipoList from './components/Tipo/TipoList';
import MediaList from './components/Media/MediaList';
import './App.css';

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
            <Route path="/genres" element={<GenreList />} />
            <Route path="/directors" element={<DirectorList />} />
            <Route path="/productoras" element={<ProductoraList />} />
            <Route path="/tipos" element={<TipoList />} />
            <Route path="/media" element={<MediaList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
