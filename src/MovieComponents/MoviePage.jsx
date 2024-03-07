import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieListState, setMovieListState] = useState(() => {
    return { movieList: ["Die Hard", "Harry Potter"] };
  });
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie />
      <MovieList moveList={movieListState.movieList}/>
    </div>
  );
};

export default MoviePage;
