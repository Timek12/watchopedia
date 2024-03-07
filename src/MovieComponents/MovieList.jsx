import MoviePage from "./MoviePage";

const MovieList = (props) => {
  return (
    <ol>
      {props.moveList.map((movie, index) => (
        <li>{movie}</li>
      ))}
    </ol>
  );
};

export default MovieList;
