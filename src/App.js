import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthScreen from "./Pages/Authscreen";
import HomeScreen from "./Pages/HomeScreen";
import Browsescreen from "./Pages/Browsescreen";
import Moviescreen from "./Pages/Moviescreen";
import { Provider } from "react-redux";
import { CookiesProvider, useCookies } from "react-cookie";
import Store from "./Store";
import Notfound from "./Pages/Notfound";
const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const authToken = cookies.authToken;
  return (
    <Provider store={Store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="" element={<AuthScreen />} />
          {authToken && (
            <>
              <Route path="/netflix" element={<HomeScreen />} />
              <Route
                path="/netflix/browse/:gener_id"
                element={<Browsescreen />}
              />
              <Route
                path="/netflix/:movie_id/:gener_id"
                element={<Moviescreen />}
              />
            </>
          )}
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
