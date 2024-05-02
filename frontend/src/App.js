import './App.css';
import MainCarousel from './Components/MainCarousel';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='px-[15%]'>
        <MainCarousel/>
      </div>
    </div>
  );
}

export default App;
