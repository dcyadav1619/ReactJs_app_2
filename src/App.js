import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutview from './components/aboutview';
import Searchview from './components/searchview';


function App(){

  const [searhResult,setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  return(
    <div>
      < Navbar searchText={searchText} />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={Aboutview} />
          {/* <Route path='/search' element={<Searchview/>} keyword={searchText} searhResult={searhResult}/> */}
          <Route path='/search' Component={<Searchview keyword={searchText} searhResult={searhResult}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
