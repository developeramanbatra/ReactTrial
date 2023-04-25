import { useState } from 'react';
import pic1 from './images/RedFort.jpg';
import pic2 from './images/VictoriaMemorial.jpg';
import pic3 from './images/BurjKhalifa.jpg';

const Mycomp8=()=>
{
const [picname, setpicname] = useState();
return(
<div className='App'>
<button name="btn1" onClick={()=>setpicname (pic1)} >Red Fort</button>&nbsp;
<button name="btn2" onClick={()=>setpicname (pic2)}>Victoria Memorial</button>&nbsp;
<button name="btn3" onClick={()=> setpicname (pic3)}>Burj Khalifa</button><br/><br/>
<img src={picname} height='300' />
</div>
)
}
export default Mycomp8;