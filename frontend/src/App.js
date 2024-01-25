import './App.css';
import { Navbar } from './components/Navbar/Navbar';
// import { Routes,Route} from 'react-router-dom';
// import {Shop} from './Pages/Shop'
// import {Shopcategory} from './Pages/Shopcategory'
// import {Product} from './Pages/Product'
// import {Cart} from './Pages/Cart'
// import {Loginsignup} from './Pages/Loginsignup'
import { Footer } from './components/Footer/Footer';
import Animated from './components/AnimatedRoutes/Animated';
// import men_banner from './components/Assests/banner_mens.png'
// import women_banner from './components/Assests/banner_women.png'
// import kids_banner from './components/Assests/banner_kids.png'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Animated></Animated>
        <Footer></Footer>
    </div>
  );
}

export default App;
