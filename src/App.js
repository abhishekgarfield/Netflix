import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthScreen from "./Pages/Authscreen";
import HomeScreen from "./Pages/HomeScreen";
import Browsescreen from "./Pages/Browsescreen";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={<AuthScreen />} />
        <Route path="/netflix" element={<HomeScreen />} />
        <Route path="/netflix/browse/:gener_id" element={<Browsescreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
