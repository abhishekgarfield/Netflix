import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsloading } from "../Slice/activity";
import MovieCard from "./Moviecard";

const Geners = () => {
  const [data, setData] = useState(null);
  const disptach = useDispatch();
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  console.log(isloading);
  const getGeneres = () => {
    disptach(setIsloading(true));
    const url = "http://localhost:8000/getgeneres";
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0].types);
        setData(data);
        disptach(setIsloading(false));
      });
  };
  useEffect(() => {
    getGeneres();
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapperimage">
        <div className="interior">
          <img src="https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZEmG1TTC1uZQxQXE-U4Br0zJnbNSNMylb0IbvXwwLUiQ-8G8S-l7lCC0rUyvTxZbrAemywhMfkmTpv6XPNRjg_q-kPXhMGT_ELEucQi8g5i.webp?r=030" />
          <p>
            A fearless warrior on a perilous mission comes face to face with a
            steely cop serving British forces in this epic saga set in
            pre-independent India.
          </p>
          <div className="fake-buttons">
            <div>
              <i className="fa fa-play"></i> Play
            </div>
            <div>
              <i className="fa fa-exclamation"></i> More info
            </div>
          </div>
        </div>
      </div>
      <div className="GenreContainer">
        {!isloading &&
          data &&
          data[0].types?.map((data) => {
            return (
              <div className="Generrow">
                <div className="genereheader"> {data.type}</div>
                <MovieCard gener_id={data.id} />
              </div>
            );
          })}
        {isloading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Geners;
