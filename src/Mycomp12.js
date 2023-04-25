//Component Portion

import { useEffect, useState } from "react"
const Mycomp12=()=>
{
    const[p,setp]=useState(10000);
    const[r,setr]=useState(6);
    const[t,sett]=useState(10);
    const[si,setsi]=useState();
    const[totam,settotam]=useState();
    const[flag,setflag]=useState(false);

    useEffect(()=>
    {
        setsi((p*parseFloat(r)*t)/100)
        settotam(parseInt(p)+parseInt(si))
    },[r,si,p,t])
    
const onsubmit=()=>
{
    setflag(true)
    if(t>=10)
    {
        setr("6")
    }
    else if(t>=5)
    {
        setr("8")
    }
    else if(t>=3)
    {
        setr("9.5")
    }
    else
    {
        setr("7")
    }
}
    return(
    <div className="App">
            
        <h2>Simple Interest with useEffect HOOK</h2>
        <input type="number" placeholder='Principal Amount' onChange={(e)=>setp(e.target.value)}/><br/><br/>
        <input type="number" placeholder='Time in years' onChange={(e)=>sett(e.target.value)}/><br/><br/>
      
        <button onClick={onsubmit}>Submit</button><br/><br/>
        {flag?
        <div>
        Your Principle amount is Rs.<b>{p}</b><br/>
        Simpe Interest is Rs.<b>{si}</b><br/>
        Total amount is Rs.<b>{totam}</b><br/>
        </div>:null}
    </div>
    );
}
export default Mycomp12