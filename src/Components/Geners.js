import MovieCard from "./Moviecard";

const Geners = () => {
  const data = ["Action", "Advanture","Animation","Biography","Comedy","Crime","Family","Homrror"];
  return (
    <div className="wrapper">
      <div className="wrapperimage">
       

        <div className="interior">
          <img src="https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZEmG1TTC1uZQxQXE-U4Br0zJnbNSNMylb0IbvXwwLUiQ-8G8S-l7lCC0rUyvTxZbrAemywhMfkmTpv6XPNRjg_q-kPXhMGT_ELEucQi8g5i.webp?r=030"/>
          <p>A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.</p>
          <div className="fake-buttons">
            <div><i className="fa fa-play"></i>  Play</div>
            <div><i className="fa fa-exclamation"></i>   More info</div>
          </div>
        </div>
      </div>
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
    </div>
    
  );
};
export default Geners;
