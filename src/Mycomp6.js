// My Component 6 Portion

import { useState } from "react"
const Mycomp6=()=>
{
    const[co,setco]=useState();
    const[name,setname]=useState();
    const[days,setdays]=useState();
    const[flag,setflag]=useState(false);
    const[gbill,setgbill]=useState();
    const[rbill,setrbill]=useState();
    const[gdis,setgdis]=useState();
    var rent=4500;
    var tbill=0;
    var dis=0;

    var showcurr=()=>
    {
        setflag(true)
      if(co==="ind")
      {
       tbill=days*rent;
       dis=(15*tbill)/100;
      }
      else if(co==="aus")
      {
       tbill=days*rent;
       dis=(8*tbill)/100;
      }
      else if(co==="us")
      {
       tbill=days*rent;
       dis=(5*tbill)/100;
      }
      else if(co==="can")
      {
       tbill=days*rent;
       dis=(12*tbill)/100;
      }
      setgbill(tbill)
      setgdis(dis)
      setrbill(parseInt(tbill)-parseInt(dis))
     
    }
    return(
      <div className="App">
        
        <h2>Hotel Rent Billing</h2>
        <input type="text" placeholder='Name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
        <input type="text" placeholder='No. of Days' onChange={(e)=>setdays(e.target.value)}/><br/><br/>
        
        <select name="Country" onChange={(e)=>setco(e.target.value)}>
            <option value="">Nationality</option>
            <option value="ind">Indian</option> 
            <option value="us">American</option>
            <option value="aus">Australian</option>
            <option value="can">Canadian</option>
        </select><br/><br/>

        <button onClick={showcurr}>Submit</button><br/><br/>
        {flag?
        <div>Hi <b> {name}</b><br/>
        Total Bill is <b> {gbill}</b><br/>
        Discount is <b> {gdis}</b><br/>
        Remaining Bill is <b> {rbill}</b><br/>
      </div>:null}
      </div>
    );
}
export default Mycomp6