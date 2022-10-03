const MovieCard = () => {
  const data = [
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
    },
    {
      name: "hella",
      rating: "4",
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      about: "heloo thsi is abhishek garfield",
    },
  ];
  return (
    <div className="Movie-row">
      {data?.map((data) => {
        return <div className="card-cont">
            <img src={data.url}/>
        </div>;
      })}
    </div>
  );
};
export default MovieCard;
