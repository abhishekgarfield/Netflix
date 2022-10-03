import MovieCard from "./Moviecard";

const Geners = () => {
  const data = ["Action", "Advanture","Animation","Biography","Comedy","Crime","Family","Homrror"];
  return (
    <div className="GenreContainer">
    
      {data?.map((data) => {
        return (
          <div className="Generrow">
            <div className="genereheader"> {data}</div>
            <MovieCard/>
          </div>
        );
      })}
    </div>
    
  );
};
export default Geners;
