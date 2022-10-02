import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthScreen from "./Pages/Authscreen";
import HomeScreen from "./Pages/HomeScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AuthScreen />} />
        <Route path="/netflix" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
