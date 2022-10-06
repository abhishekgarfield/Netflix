import { useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ isLogin, setislogin, isAuthmodal, setIsauthmodal }) => {
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    url: "",
  });
  const isloading = useSelector((state) => {
    return state.activity.isLoading;
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (user.password == user.confirmpassword) {
      console.log(user);
      /*
    const url = `http://localhost:8000/${isLogin ? "login" : "signup"}`;
    fetch(url, { method: "Post" }).then((response) => {
      if (response.status == 403) {
        response.json().then((data) => {
          setError(data);
        });
      } else if (response.status == 402) {
        response.json().then((data) => {
          setError(data);
        });
      }
      if (response.status == 401) {
        response.json().then((data) => {
          setCookie("authToken", data.token);
          setCookie("user_id", data.user_id);
          navigate("/netflix");
          window.location.reload();
        });
      }
    });
    */
    } else if (user.password != user.confirmpassword) {
      setError("Passwords don't match");
    }
  };
  return (
    <div className="authmodal-main-cont">
      <img src="https://i.imgur.com/J2pPJxt.png" />
      <div className="authmodal-inner-cont">
        <i
          className="fa fa-remove"
          onClick={() => {
            setIsauthmodal(false);
          }}
        >
          {" "}
        </i>
        <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={user.confirmpassword}
            name="confirmpassword"
            onChange={(e) => handleChange(e)}
          />
        )}
        {!isLogin && (
          <input
            type="url"
            placeholder="Profile pic"
            value={user.url}
            name="url"
            onChange={(e) => handleChange(e)}
          />
        )}
        {error && <div className="error-cont">{error}</div>}
        <div className="submit-container" onClick={handleSubmit}>
          {!isloading && (
            <div className="vutton"> {isLogin ? "Sign in" : "Sign up"}</div>
          )}
          {isloading && <div className="loader"></div>}
        </div>
        <p>
          New to Netflix?{" "}
          <span
            onClick={() => {
              setislogin(false);
            }}
          >
            {" "}
            Sign up now.
          </span>
        </p>
      </div>
    </div>
  );
};
export default AuthModal;
