const Geners = () => {
  const data = ["Action", "comedy"];
  return (
    <div className="GenreContainer">
      <div className="Gener-header">
        {data?.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
    </div>
  );
};
export default Geners;
