import MovieCard from "./Moviecard";

const Geners = () => {
  const data = ["Action", "comedy"];
  return (
    <div className="GenreContainer">
      {data?.map((data) => {
        return (
          <div className="Generrow">
            <div>{data}</div>;
            <MovieCard/>
          </div>
        );
      })}
    </div>
  );
};
export default Geners;
