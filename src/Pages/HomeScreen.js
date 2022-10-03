import Geners from "../Components/Geners";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

const HomeScreen = () => {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 10) {
      console.log(document.documentElement.scrollTop);
      document.querySelector(
        ".navbar-container"
      ).style.backgroundColor = `rgba(20,20,20,${
        0.004 * document.documentElement.scrollTop
      })`;
    } 
    else{
      document.querySelector(
        ".navbar-container"
      ).style.background="linear-gradient(rgba(0, 0, 0, 0.865),rgba(0, 0, 0, 0))"
    }
  });
  return (
    <div className="homepage-container" >
      <Navbar />
      <Geners />
      <Footer />
    </div>
  );
};
export default HomeScreen;
