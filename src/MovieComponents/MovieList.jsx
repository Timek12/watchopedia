const MovieList = (props) => {
  return (
    <div className="text-white">
      {props.moveList.map((movie, index) => {
        return <div key={index}>{movie}</div>;
      })}
    </div>
  );
};

export default MovieList;
