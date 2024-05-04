import "./App.css";
import CardStack from "./Components/CardStack";
import Footer from "./Components/Footer";
import Main2Carousel from "./Components/Main2Carousel";
import MainCarousel from "./Components/MainCarousel";
import MainOptions2 from "./Components/MainOption2";
import MainOptions1 from "./Components/MainOptions1";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="px-[15%] pt-20">
        <MainCarousel />
        <hr className="mt-8" />
        <Main2Carousel />
        <hr className="mt-8" />
        <CardStack />
      </div>
      <div className="px-[10%]">
        <hr />
        <MainOptions1 />
        <MainOptions2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
