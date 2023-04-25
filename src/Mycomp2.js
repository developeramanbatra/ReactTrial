import { useState } from "react"
const Mycomp2=()=>
{
    const[name,setname]=useState();
    const[age,setage]=useState();
    const[sal,setsal]=useState();
    const[tsal,settsal]=useState();
    const[gbon,setgbon]=useState();
    const[flag,setflag]=useState(false);
    var bon=0;
  
    var onsubmit=()=>
    {
      setflag(true);
      if(age>=50)
      {
        bon=(10*sal)/100;
      }
      else if(age>=35)
      {
        bon=(8*sal)/100;
      }
      else if(age>=20)
      {
        bon=(5*sal)/100;
      }
      else
      {
        bon=0;
      }
      setgbon(bon);
      settsal(parseInt(bon)+parseInt(sal)); 
    }
    return(
      <div className="App">
        
        <h2>Bonus Calculator</h2>
        <input type="text" placeholder='Name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
        <input type="text" placeholder='Age' onChange={(e)=>setage(e.target.value)}/><br/><br/>
        <input type="text" placeholder='Salary' onChange={(e)=>setsal(e.target.value)}/><br/><br/>
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
export default Mycomp2