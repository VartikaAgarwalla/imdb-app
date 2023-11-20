import logo from './logo.svg';
import './App.css'
import LifeCycleExample from './components/LifeCycleExample';
import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MovieListWrapper from './components/MovieListWrapper';
import MoviePage from './components/MoviePage';
import Favourites from './components/Favourites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetailPage from './components/MovieDetailPage';
import AddMovie from './components/AddMovie';

function App() {
  const [favourites, setFavouries] = useState([]);
  return (
   <div className='container'>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<MoviePage setFavouries={setFavouries} favourites={favourites} />} />
            <Route path="/favourites" element={<Favourites favourites={favourites} />} />
            <Route path="/detail/:movieId" element={<MovieDetailPage />} />
            <Route path="/add-movie" element={<AddMovie />} />
        </Routes>        
      </BrowserRouter>
   </div>
  );
}

export default App;
