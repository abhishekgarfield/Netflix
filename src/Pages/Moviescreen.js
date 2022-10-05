import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";
import { setIsloading } from "../Slice/activity";

const Moviescreen = () => {
  const disptach = useDispatch();
  const navigation = useNavigate();
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  const { movie_id, gener_id } = useParams();
  console.log(gener_id)
  const [data, setData] = useState(null);
  const [similar, setSimilar] = useState(null);
  const getMovie = () => {
    disptach(setIsloading(true));
    const url = `http://localhost:8000/getmovie/?movie_id=${movie_id}`;
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
  const getMovies = () => {
    const url = `http://localhost:8000/getmovies/?gener_id=${gener_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSimilar(data.slice(0, 6));
      });
  };
  useEffect(() => {
    getMovie();
    getMovies();
  }, []);
  return (
    <div className="Browsescreencontainer moviescreen">
       
      {!isloading && (
        <>
          {" "}
          <div
            className="wrapperimage"
            style={{
              background: `linear-gradient(180deg, hsla(0, 0%, 8%, 0) 0, hsla(0, 0%, 8%, .15) 15%, hsla(0, 0%, 8%, .35) 29%, hsla(0, 0%, 8%, .58) 44%, #141414), url(${
                data && data.wrapper_imgurl
              }) no-repeat `,
            }}
          >
            <div className="interior">
              <img src={data && data.inner_imgurl} />
              <p>
                A fearless warrior on a perilous mission comes face to face with
                a steely cop serving British forces in this epic saga set in
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
          <Navbar />
          <div className="moviewscreen-infocontainer">
            <div className="moviewscreen-left">
              <div>
                <span>{Math.floor(Math.random() * 20) + 2000}</span>
                <span  className="mat">{data?.maturityrating}</span>
              </div>
              <div>#8 in Tv shows today</div>
              <div>{data?.about}</div>
            </div>
            <div className="moviewscreen-right">
              <div><span>Cast:</span>{`${data?.cast}`}</div>
              <div><span>Generes:</span>{`${data?.generes[0]},${data?.generes[1]}`}</div>
              <div><span>This movie is:</span>{`Adrneline rush ,Gritty`}</div>
            </div>
          </div>
          <p className="similar-header">More like this</p>
          <div className="browse-movie-container">
            
            {similar?.map((data, index) => {
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
            </div>
           {data && <div className="Info-card">
                <p>{`About ${data?.name}`}</p>
                <div className="infocard-container">
                    <div><span>Creators:</span> Abhishek Garfield</div>
                    <div><span>Cast:</span> Garfield , Ricky , Harsh , Jean , Shivani , Sudesh , Harsh mittal , Abhishek Sharma , Shubham , Rishu , Gaurav Mehat a, Harish , Ambika , Akash </div>
                    <div><span>Generes:</span> {`${data?.generes[0]},${data.generes[1]}`}</div>
                    <div><span>This show is:</span> Grity , Dark</div>
                    <div><span >Maturity rating: </span><span className="mat"> {`${data.maturityrating} `} </span> language , violence ,mature themes ,Content restricted to adults</div>
                </div>
            </div>}
          
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

export default Moviescreen;
