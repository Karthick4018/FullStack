import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routes,Route} from 'react-router-dom';
import {Shop} from './Pages/Shop'
import {Shopcategory} from './Pages/Shopcategory'
import {Product} from './Pages/Product'
import {Cart} from './Pages/Cart'
import {Loginsignup} from './Pages/Loginsignup'
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kids_banner from './components/Assests/banner_kids.png'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category={'men'}/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category={'women'}/>}/>
        <Route path='/kids' element={<Shopcategory banner={kids_banner} category={'kid'}/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
