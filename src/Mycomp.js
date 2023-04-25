// MY COMPONENT PORTION 

import { useState } from "react"
const Mycomp=()=>
{
    const[name,setname]=useState();
    const[gen,setgen]=useState();
    const[dep,setdep]=useState();
    const[sal,setsal]=useState();
    const[tsal,settsal]=useState();
    const[gbon,setgbon]=useState();
    const[flag,setflag]=useState(false);
    var bon=0;
  
    var onsubmit=()=>
    {
      setflag(true);
      if(gen==="m" && dep==="sl")
      {
        bon=(15*sal)/100;
      }
      else if(gen==="f" && dep==="sl")
      {
        bon=(18*sal)/100;
      }
      else if(gen==="m" && dep==="mg")
      {
        bon=(10*sal)/100;
      }
      else if(gen==="f" && dep==="mg")
      {
        bon=(7*sal)/100;
      }
      
      setgbon(bon);
      settsal(parseInt(bon)+parseInt(sal)); 
    }
    return(
      <div className="App">
        
        <h2>Bonus Calculator</h2>

        <input type="text" name="" placeholder='Name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
        
        <b>Choose Gender</b><br/><br/>
        <label><input type="radio" name="gender" value="m" onChange={(e)=>setgen(e.target.value)}/>Male</label>
        <label><input type="radio" name="gender" value="f" onChange={(e)=>setgen(e.target.value)}/>Female</label><br/><br/>
        
        <b>Choose Department</b><br/><br/>
        <label><input type="radio" name="dep" value="sl" onChange={(e)=>setdep(e.target.value)}/>Sales</label>
        <label><input type="radio" name="dep" value="mg" onChange={(e)=>setdep(e.target.value)}/>Management</label><br/><br/>
    
        
    
        <input type="text" name="" placeholder='Salary' onChange={(e)=>setsal(e.target.value)}/><br/><br/>
        <button onClick={onsubmit}>Submit</button><br></br>
  
      {flag===true?
        <div>
        Welcome {name}<br/>
        Your Bonus is {gbon}<br/>
        Your Total Salary is {tsal}<br/>
        </div>:null
      }
      </div>
    );
}
export default Mycomp