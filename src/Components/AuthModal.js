const AuthModal = ({ isLogin, setislogin, isAuthmodal, setIsauthmodal }) => {
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
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="password" placeholder="Confirm Password" />}
        <input
          type="button"
          value={isLogin ? "Sign in" : "Sign up"}
          onClick={() => {}}
        />
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
