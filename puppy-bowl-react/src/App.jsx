import {Route, Routes, Link } from 'react-router';
import './App.css';
import UpperPortion from './components/UpperPortion';
import LowerPortion from './components/LowerPortion';
import StartPage from './pages/StartPage';
import Focus from './pages/Focus';
import AddPup from './pages/AddPup';

function App() {


  return (


    <>
          
          <div className='upperNav'>

         <Link to={"/"}>Home</Link>
         <Link to={"/addpup"}>Add Pup</Link>
         </div>
         <UpperPortion />
        


      <Routes>
                <Route path="/" element={<StartPage />}></Route>
                <Route path="/addpup" element={<AddPup />}></Route>
                <Route path="/focus" element={<Focus />}></Route>                
            </Routes>
          </>
    
  )
}

export default App
