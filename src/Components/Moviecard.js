import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsloading } from "../Slice/activity";
const MovieCard = ({ show_id, gener_id }) => {
  const navigation = useNavigate();
  const [data, setData] = useState(null);
  const getMovies = () => {
    const url = `http://localhost:8000/getmovies/?gener_id=${gener_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="Movie-row">
      {data?.map((data, index) => {
        return (
          <div className="card-cont" key={index} onClick={()=>{
            navigation(`/netflix/${data.id}/${data.gener_id}`)
            window.location.reload();
          }}>
            <img src={data.img_url} />
            <div className="card-info-cont">
              <div className="col1">
                <div className="right">
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
                  {data.generes.map((data, index) => {
                    return <li key={index}>{data}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      <div className="left-arrow">
        <i
          className="fa fa-chevron-right"
          onClick={() => {
            navigation(`/netflix/browse/${gener_id}`);
          }}
        ></i>
      </div>
    </div>
  );
};
export default MovieCard;
