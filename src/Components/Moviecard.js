const MovieCard = () => {
  const data = [
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcMvsPQGfQKGFVtRYo6sPFJO0f4PffU8mc-GU4oZSmykfkggdro0_cqYVHmiFbtE1z0esm_XoT71N8uomN6oqya15SdWskLMYIOwPzYgVfXs42augoiamc3uSgwzanO5Hd_n.jpg?r=860",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
      maturityrating: "U/A13+",
      duration: "2h 17m",
      generes: ["comedy", "adventure"],
    },
  ];
  return (
    <div className="Movie-row">
        
      {data?.map((data, index) => {
        return (
            <div className="card-cont">
              <img src={data.url} />
              <div className="card-info-cont">
                <div className="col1">
                  <div classname="right">
                    <i className="fa fa-play"></i>
                    <i className="fa fa-plus"></i>
                    <i className="fa fa-thumbs-up"></i>
                  </div>
                  <div className="drop">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </div>
                <div className="col2">
                  <span id="maturityrating">{data.maturityrating}</span>
                  <span>{data.duration}</span>
                </div>
                <div className="col3">
                  <ul>
                    {data.generes.map((data) => {
                      return <li>{data}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
        );
      })}
      <div className="left-arrow">
            <i className="fa fa-chevron-right" onClick={()=>{
                console.log("here");
                document.querySelector(".Movie-row").screenLeft=50;
            }}></i>
        </div>
    </div>
  );
};
export default MovieCard;
