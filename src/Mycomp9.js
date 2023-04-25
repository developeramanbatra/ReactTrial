
import { useState } from 'react';
import pic1 from './images/RedFort.jpg';
import pic2 from './images/VictoriaMemorial.jpg';
import pic3 from './images/BurjKhalifa.jpg';

const Mycomp9=()=>
{
const [picname, setpicname] = useState();
return(
<div className='App'>
<b>Choose Below</b><br/><br/>
    <label><input type="radio" name="picc" onClick={(e)=> setpicname(pic1)}/>Red Fort</label><br/><br/>
    <label><input type="radio" name="picc" onClick={(e)=> setpicname(pic2)}/>Victoria Memorial</label><br/><br/>
    <label><input type="radio" name="picc" onClick={(e)=> setpicname(pic3)}/>Burj Khalifa</label><br/><br/>

<img src={picname} height='350' />
</div>
)
}
export default Mycomp9;