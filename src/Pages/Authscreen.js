import Frequent from "../Components/Frequent.js"
import Footer from "../Components/Footer.js"
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
      <hr/>
      <div className="Second-container">
        <div className="second-info">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </div>
        <div className="second-img">
          <div className="image-container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            <div className="video-container">
              <video autoPlay loop muted playsinline>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="Third-container">
        <div className="second-img">
          <div className="image-container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
            <div className="image-container1">
             <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
             <div className="styles">
              <h3>Starnger things</h3>
              <p>Downloading...</p>
             </div>
             <img  id="gif" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"/>
            </div>
          </div>
        </div>
        <div className="second-info">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
      <hr/>
      <div className="fourth-container">
        <div className="second-info">
          <h1>Watch everywhere.</h1>
          <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </h2>
        </div>
        <div className="second-img">
          <div className="image-container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
            <div className="video-container">
              <video autoPlay loop muted playsinline>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="fifth-container">
        <div className="second-img">
          <div className="image-container">
            <img src="https://occ.a.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" />
            
          </div>
        </div>
        <div className="second-info">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
      <hr/>
      <Frequent/>
      <hr/>
      <Footer/>
      
    </div>
  );
};
export default AuthScreen;
