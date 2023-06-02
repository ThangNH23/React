import './App.css';
import './style/style.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Popular from './components/Popular'
import Release from './components/Release'
import Category from './components/Category'
import Watch from './components/Watch'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='Navbar'>
      <Navbar/>
    </div>
    <div className="Hero">
      <Hero/>
    </div>
    <div className="Popular">
      <Popular/>
    </div>
    <div className="Release">
      <Release/>
    </div>
    <div className="Category">
      <Category/>
    </div>
    <div className="Watch">
      <Watch/>
    </div>
    <div className="News">
      <News/>
    </div>
    <div className="Footer">
      <Footer/>
    </div>
    </div>
  );
}

export default App;
