import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";
import { setIsloading } from "../Slice/activity";

const Browsescreen = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  const { gener_id } = useParams();
  const [data, setData] = useState(null);
  const getGeneres = () => {
    disptach(setIsloading(true));
    const url = `https://netflix2789.herokuapp.com/getmovies/?gener_id=${gener_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        disptach(setIsloading(false));
      });
  };
  useEffect(() => {
    getGeneres();
  }, []);
  return (
    <div className="Browsescreencontainer">
      {!isloading && (
        <>
          <div
            className="wrapperimage"
            style={{
              background: `linear-gradient(180deg, hsla(0, 0%, 8%, 0) 0, hsla(0, 0%, 8%, .15) 15%, hsla(0, 0%, 8%, .35) 29%, hsla(0, 0%, 8%, .58) 44%, #141414), url(${
                data?.length > 0
                  ? data[0]?.wrapper_imgurl
                  : "https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/c6e22290-98e5-4eee-b72d-47156e4893fc/IN-en-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              }) no-repeat `,
            }}
          >
            <div className="interior">
              {data?.length > 0 && <img src={data[0].inner_imgurl} />}
              {data?.length > 0 && (
                <p>
                  A fearless warrior on a perilous mission comes face to face
                  with a steely cop serving British forces in this epic saga set
                  in pre-independent India.
                </p>
              )}
              {data?.length > 0 && (
                <div className="fake-buttons">
                  <div onClick={()=>{
                    navigate(`/netflix/movie/${data[0].id}`)
                  }}>
                    <i className="fa fa-play"></i> Play
                  </div>
                  <div
                    onClick={() => {
                      navigate(`/netflix/${data[0].id}/${data[0].gener_id}`);
                    }}
                  >
                    <i className="fa fa-exclamation"></i> More info
                  </div>
                </div>
              )}
            </div>
          </div>
          <Navbar />
          <div className="browse-header">
            {data?.length > 0
              ? gener_id == 100 || gener_id == 101
                ? gener_id == 100
                  ? "Movies"
                  : "Tv Shows"
                : gener_id.slice(0, 6) == "search"
                ? `Search results for "${gener_id.slice(7)}"`
                : data && data[0].generes[0]
              : " oops ! No shows found"}
          </div>
          <div className="browse-movie-container">
            {data?.map((data, index) => {
              return (
                <div
                  className="card-cont"
                  onClick={() => {
                    navigate(`/netflix/${data.id}/${data.gener_id}`);
                    window.location.reload();
                  }}
                  key={index}
                >
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
          </div>
        </>
      )}
      {isloading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Browsescreen;
