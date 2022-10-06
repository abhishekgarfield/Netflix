import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthScreen from "./Pages/Authscreen";
import HomeScreen from "./Pages/HomeScreen";
import Browsescreen from "./Pages/Browsescreen";
import Moviescreen from "./Pages/Moviescreen";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import Store from "./Store";
const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="" element={<AuthScreen />} />
          <Route path="/netflix" element={<HomeScreen />} />
          <Route path="/netflix/browse/:gener_id" element={<Browsescreen />} />
          <Route path="/netflix/:movie_id/:gener_id" element={<Moviescreen/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
