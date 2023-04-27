// APP PORTION

import './App.css';
import banner from './images/siteBanner.jpg';
import { Link } from 'react-router-dom';
import SiteRoutes from './components/SiteRoutes';

const App=()=>
{
  return(
    <div className='App'>
      <table border='1' width='1000px' align='center' cellSpacing='0' cellPadding='0'>
        <tbody>
        <tr>
          <td colSpan='5'> <img src={banner} width='100%' alt='SiteBanner'></img> </td>
        </tr>
        <tr>
          <td> <Link to='/homepage'>Home</Link></td>
          <td> <Link to='/aboutus'>About Us</Link></td>
          <td> <Link to='/products'>Products</Link></td>
          <td> <Link to='/contactus'>Contact Us</Link></td>
          <td> <Link to='/search'>Search</Link></td>
        </tr>
        <tr>
          <td colSpan='5'>
          <SiteRoutes/>
          </td>
        </tr>
        <tr>
          <td colSpan='5'>&copy; Aman Project </td>  {/* &copy; is copyright symbol...not comuplsory to write*/}
        </tr>
        </tbody>
      </table>
    </div>
    )
}
export default App;