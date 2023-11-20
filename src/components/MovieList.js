import MovieCard from "./MovieCard";
import { useState, useEffect } from 'react';
import Pagination from "./Pagination";
// import { movies as movieData } from '../mockData/movieData';

const MovieList = ({ setFavouries, favourites }) => {
    const [movies, setMovies] = useState();
    const [moviePageStore, setMoviePageStore] = useState({});

    const fetchMovieData = (pageNumber=1) => {
        const pageWiseMovie = moviePageStore[pageNumber];
        if (pageWiseMovie) {
            setMovies(pageWiseMovie);
        } else {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${pageNumber}`)
                .then(res => res.json())
                .then(data => {
                    setMovies(data);
                    setMoviePageStore((preVal)  => {
                        return  {
                            ...preVal,
                            [pageNumber]: data
                        }
                    });
                });
        }
    }

    useEffect(() => {
        fetchMovieData();
    }, []);


    return (
        <div className="movie-list">
            {
                movies?.results?.map((movie) => {
                    return (<MovieCard movie={movie} setFavouries={setFavouries} favourites={favourites} />);
                })
            }
            {
                movies?.total_pages && (
                    <Pagination totalPages={movies?.total_pages} fetchMovieData={fetchMovieData}/>
                )
            }
        </div>
    )
}

export default MovieList;