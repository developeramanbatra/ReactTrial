// SiteRoutes PORTION

import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Search from './Search';
import Products from './Products';

const SiteRoutes=()=>
{
  return(
    <Routes>
        <Route path='/' element={<Navigate to='/homepage'/>}/>
        <Route path='/homepage' element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/products' element={<Products/>}/>
    </Routes>
    )
}
export default SiteRoutes;