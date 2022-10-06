import { getSuggestedQuery } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const user_id = cookies.user_id;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const getUser = () => {
    const url = `http://localhost:8000/user/?user_id=${user_id}`;
    fetch(url, { method: "Get" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
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
    getUser();
  }, []);
  return (
    <div className="protection">
      <div className="navbar-container">
        <div className="cont2">
          <div className="nav-left">
            <img
              src="https://i.imgur.com/J2pPJxt.png"
              onClick={() => {
                navigate("/netflix");
                window.location.reload();
              }}
            />

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
            <div className="nav-div search-cont ">
              <i
                className="fa fa-search"
                accessKey="k"
                onClick={() => {
                  var el = document.querySelector(".search-cont");
                  el.classList.add("hello");
                  var el2 = document.querySelector("#searchstring");
                  console.log(el2.value);
                  if (el2.value.length > 0) {
                    console.log(el2.value);
                    navigate(`/netflix/browse/search=${el2.value}`);
                    window.location.reload();
                  }
                }}
              ></i>
              <input
                placeholder="search"
                type="text"
                id="searchstring"
                onBlur={(e) => {
                  if (e.target.value.length == 0) {
                    var el = document.querySelector(".search-cont");
                    el.classList.remove("hello");
                  }
                }}
              />
            </div>
            <div className="nav-div" id="logout">
              <div
                style={{ alignItems: "center", display: "flex" }}
                onClick={() => {
                  var el = document.querySelector(".profile-drop");
                  {
                    el.classList.toggle("disappear");
                  }
                }}
              >
                <img src={user?.profile_pic} />
                <span className="fa fa-chevron-down"></span>
              </div>
              <div className="profile-drop">
                <div className="profile-pic-email">
                  <img src={user?.profile_pic} />
                  {user?.email}
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    removeCookie("user_id", { path: "/" });
                    removeCookie("authToken", { path: "/" });
                    navigate("/");
                    window.location.reload();
                  }}
                  className="logout"
                >
                  Signout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
