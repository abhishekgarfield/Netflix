import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/navbar";

const Browsescreen = () => {
    const {gener_id}=useParams();
 const [data,setData]=useState(null);
 const getGeneres = () => {
    const url = `http://localhost:8000/getmovies/?gener_id=${gener_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    getGeneres();
  }, []);
  return (
    <div className="Browsescreencontainer">
        <div className="wrapperimage" style={{ "background": `linear-gradient(180deg, hsla(0, 0%, 8%, 0) 0, hsla(0, 0%, 8%, .15) 15%, hsla(0, 0%, 8%, .35) 29%, hsla(0, 0%, 8%, .58) 44%, #141414), url(${data && data[0].wrapper_imgurl}) no-repeat `}} >
            
        <div className="interior" >
          <img src={data && data[0].inner_imgurl} />
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
      <Navbar />
      <div className="browse-header">{ data && data[0].generes[0]}</div>
      <div className="browse-movie-container">
          {data?.map((data, index) => {
            return (
              <div className="card-cont">
                <img src={data.img_url} />
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
          
        </div>
        
      </div>
  );
};

export default Browsescreen;