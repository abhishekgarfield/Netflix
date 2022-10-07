import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { setIsloading } from "../Slice/activity";

const ViewMovie = () => {
  const disptach = useDispatch();
  const navigation = useNavigate();
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  const { movie_id } = useParams();
  const [data, setData] = useState(null);
  const getMovie = () => {
    disptach(setIsloading(true));
    const url = `https://netflix2789.herokuapp.com/getmovie/?movie_id=${movie_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        disptach(setIsloading(false));
      });
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="video-player">
      {data && !isloading && (
        <>
          <video controls autoPlay>
            <source src={data?.video_url} type="video/mp4" />
          </video>
          <i
            className="fa  fa-long-arrow-left"
            onClick={() => {
              navigation(`/netflix/${data.id}/${data.gener_id}`);
              window.location.reload();
            }}
          ></i>
        </>
      )}
      {!data && isloading && <div className="loader"></div>}
    </div>
  );
};
export default ViewMovie;
