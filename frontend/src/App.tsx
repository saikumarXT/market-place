import './App.css'
import { HeaderComponent } from './components/header';
import { Footer } from './components/footer';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import AllCategories from './layout/allCategories';
import Electronics from './layout/electronics';
import HousesAndApartments from './layout/housesAndApartments';
import Vehicles from './layout/vehicles';
import Fashion from './layout/fashion';

function App() {


  return (
    <>
    <div>
    <HeaderComponent/>

    <div className='m-20'>
   
    <Routes>
        <Route path='/' element={<AllCategories/>}/>
        <Route path='/electronicspage' element={<Electronics/>}/>
        <Route path='/realestateage' element={<HousesAndApartments/>}/>
        <Route path='/vehiclepage' element={<Vehicles/>}/>
         <Route path='/fashion' element={<Fashion/>}/>
    </Routes>
    </div>

    <Footer/> 
      </div>
    </>
  )
}





export default App 