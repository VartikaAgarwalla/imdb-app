import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";

const MovieListWrapper = ({ setFavouries, favourites }) => {
    return (
        <div className="movie-list-wrapper">
            <MovieHeading />
            <MovieList setFavouries={setFavouries} favourites={favourites}  />
        </div>
    );
}

export default MovieListWrapper;