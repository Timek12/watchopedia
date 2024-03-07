import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return { movieList: ["Die Hard", "Harry Potter"] };
  });

  const handleAddMovie = (movieName) => {
    setMovieState((previousState) => {
      return {
        ...previousState,
        movieList: previousState.movieList.concat([movieName]),
      };
    });
  };

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  );
};

export default MoviePage;
