import './App.css';
import Main2Carousel from './Components/Main2Carousel';
import MainCarousel from './Components/MainCarousel';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='px-[15%]'>
        <MainCarousel/>
        <hr className='mt-8'/>
        <Main2Carousel/>
      </div>
    </div>
  );
}

export default App;
