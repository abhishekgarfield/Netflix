const AuthScreen = () => {
  return (
    <div className="Auth-container">
      <div className="First-Container">
        <div className="Header">
          <div className="Header-image">
            <img src="https://i.imgur.com/J2pPJxt.png" alt="logo" />
          </div>
          <div className="header-options">
            <select placeholder="select">
              <option>English</option>
              <option>Hindi</option>
              <option>Hindi</option>
            </select>
            <input type="button" value="Sign in" />
          </div>
        </div>
        <div className="Search-container">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div
            className="Email-input"
            onFocus={(e) => {
              document.querySelector(".label").style.top = "2px";
              document.querySelector(".label").style.fontSize = "12px";
            }}
          >
            <input type="text" />
            <div className="label">
              <label>Email address</label>
            </div>
            <input type="button" value="Get Startted" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthScreen;
