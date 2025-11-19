import './App.css'
import { Routes, Route } from 'react-router-dom';
import AllCategories from './layout/allCategories';
import Electronics from './layout/electronics';
import HousesAndApartments from './layout/housesAndApartments';
import Vehicles from './layout/vehicles';
import Fashion from './layout/fashion';
import Message from './layout/message';
import { Profile } from './pages/profile';
import { SigninPage} from './pages/signinPage';
import {SignupPage} from './pages/signupPage';

function App() {


  return (
    <>
    <div>
    <div className=' '>
    <Routes>
      
        <Route index element={<SignupPage/>} />
        <Route path='/signin' element={<SigninPage/>} />

        <Route path='/electronicspage' element={<Electronics/>}/>
        <Route path='/realestateage' element={<HousesAndApartments/>}/>
        <Route path='/vehiclepage' element={<Vehicles/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/home' element={<AllCategories/>}/>
        <Route path='/profile' element={<Profile/>}/>

    </Routes>
    
    </div>

      </div>
    </>
  )
}





export default App 