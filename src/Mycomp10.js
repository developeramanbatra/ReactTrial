import { useState } from 'react';
import pic1 from './images/RedFort.jpg';
import pic2 from './images/VictoriaMemorial.jpg';
import pic3 from './images/BurjKhalifa.jpg';

const Mycomp10=()=>
{
const [picname, setpicname] = useState();
const [picc, setpicc] = useState();
const onsubmit=()=>
{
    if(picc==="1")
    {
        setpicname(pic1)
    }
    else if(picc==="2")
    {
        setpicname(pic2)
    }
    else if(picc==="3")
    {
        setpicname(pic3)
    }
}
return(
<div className='App'>
 <b>Choose Below</b><br/><br/>
    <label><input type="radio" name="picc" value="1" onClick={(e)=> setpicc(e.target.value)}/>Red Fort</label><br/><br/>
    <label><input type="radio" name="picc" value="2" onClick={(e)=> setpicc(e.target.value)}/>Victoria Memorial</label><br/><br/>
    <label><input type="radio" name="picc" value="3" onClick={(e)=> setpicc(e.target.value)}/>Burj Khalifa</label><br/><br/>

    <button onClick={onsubmit}>Submit</button><br/><br/><br/><br/>
    
    <img src={picname} height='350'/>
</div>
)
}
export default Mycomp10;