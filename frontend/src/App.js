import "./App.css";
import CardStack from './Components/mainPage/CardStack';
import Footer from "./Components/mainPage/Footer";
import Main2Carousel from "./Components/mainPage/Main2Carousel";
import MainCarousel from "./Components/mainPage/MainCarousel";
import MainOptions2 from "./Components/mainPage/MainOption2";
import MainOptions1 from "./Components/mainPage/MainOptions1";
import Navbar from "./Components/mainPage/Navbar";

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
