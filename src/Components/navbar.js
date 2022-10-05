import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        document.querySelector(
          ".navbar-container"
        ).style.backgroundColor = `rgba(20,20,20,${
          0.01 * document.documentElement.scrollTop
        })`;
      } else {
        document.querySelector(".navbar-container").style.background =
          "linear-gradient(rgba(0, 0, 0, 0.865),rgba(0, 0, 0, 0))";
      }
    });
  }, []);
  return (
    <div className="protection">
      <div className="navbar-container">
        <div className="cont2">
          <div className="nav-left">
            <img src="https://i.imgur.com/J2pPJxt.png"  
             onClick={() => {
              navigate("/netflix");
              window.location.reload();
            }}/>

            <div
              className="nav-div"
              onClick={() => {
                navigate("/netflix");
                window.location.reload();
              }}
            >
              Home
            </div>
            <div
              className="nav-div"
              onClick={() => {
                navigate("/netflix/browse/100");
                window.location.reload();
              }}
            >
              Movies
            </div>
            <div
              className="nav-div"
              onClick={() => {
                navigate("/netflix/browse/101");
                window.location.reload();
              }}
            >
              Tv shows
            </div>
            <div className="nav-div">My list</div>
          </div>
          <div className="nav-right">
            <div className="nav-div">
              <i className="fa fa-search"></i>
            </div>
            <div className="nav-div">Signout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
