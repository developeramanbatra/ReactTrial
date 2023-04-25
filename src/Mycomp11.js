//Component Portion

import { useEffect, useState } from "react"
const Mycomp11=()=>
{
    const[name,setname]=useState();
    const[age,setage]=useState();
    const[bonus,setbonus]=useState();
    const[salary,setsalary]=useState();
    const[totsal,settotsal]=useState();
    const[flag,setflag]=useState();

    useEffect(()=>
    {
        settotsal(parseInt(salary)+parseInt(bonus))
    },[bonus])

const onsubmit=()=>
{
    setflag(true)
    if(age>=50)
    {
        setbonus((10*salary)/100)
    }
    else if(age>=35)
    {
        setbonus((8*salary)/100)
    }
    else if(age>=20)
    {
        setbonus((5*salary)/100)
    }
    
}
    return(
    <div className="App">
            
        <h2>Bonus with useEffect HOOK</h2>
      
        <input type="text" name="" placeholder='Name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
        <input type="text" name="" placeholder='Age' onChange={(e)=>setage(e.target.value)}/><br/><br/>
        <input type="text" name="" placeholder='Salary' onChange={(e)=>setsalary(e.target.value)}/><br/><br/>

        <button onClick={onsubmit}>Submit</button><br/><br/>
        
        {flag?
        <div>
        Hi <b>{name}</b><br/>
        Your Bonus is Rs.<b>{bonus}</b><br/>
        Your Total Salary is Rs.<b>{totsal}</b><br/>
        </div>:null}
    </div>
    );
}
export default Mycomp11