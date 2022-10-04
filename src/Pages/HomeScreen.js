import Geners from "../Components/Geners";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { useCookies } from "react-cookie";

const HomeScreen = () => {
  const[cookies,setCookie,removeCookie]=useCookies(`[movie]`)
 
  return (
    <div className="homepage-container">
      <Navbar />
      <Geners />
      <Footer />
    </div>
  );
};
export default HomeScreen;
