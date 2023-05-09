// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
// import './App.css';
import Category from './contesApi/Category/Category';
import CategoryDetails from './contesApi/CategoryDetails/CategoryDetails';
import Home from './contesApi/Home/Home';
// // import Home from './component/Home/Home';
// import Assect from './component/Assect/Assect';
// import NotFound from './component/NotFound/NotFound';
// import FriendDetail from './component/FriendDetails/FriendDetail';
// import Home from './componentTwo/Home/Home';
// import MoreInfo from './componentTwo/MoreInfo/MoreInfo';

export const contexapi= createContext();

function App() {
  const [count,setCount]=useState(0);
  return (
    <contexapi.Provider value={[count,setCount]}>
        {/* <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/friend/:friendId' element={<FriendDetail/>}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Assect />} />
      </Routes>
    </BrowserRouter> */}


    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='name/:countryName' element={<MoreInfo/>}></Route>
        
      </Routes>
    </BrowserRouter> */}



    <Home></Home>  
    <Category></Category> 
    <CategoryDetails></CategoryDetails>
  
    </contexapi.Provider>
  );
}

export default App;
