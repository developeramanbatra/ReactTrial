// MY COMPONENT 3 PORTION 

import { useState } from "react"
const Mycomp3=()=>
{
    const[gacc,setgacc]=useState(0);
    const[gtot,setgtot]=useState(40000);
    const[cb1,setcb1]=useState();
    const[cb2,setcb2]=useState();
    const[cb3,setcb3]=useState();
    const[cb4,setcb4]=useState();
    var onsubmit=()=>
    {
      var accbill=0;
      if(cb1===true)
      {
        accbill+=575;
      }
      if(cb2===true)
      {
        accbill+=1000;
      }
      if(cb3===true)
      {
        accbill+=1450;
      }
      if(cb4===true)
      {
        accbill+=400;
      }
      setgacc(accbill);
      setgtot(40000+accbill); 
    }
    return(
    <div className="App">
        
    <h2>Billing System</h2>
    <h3>Laptop Base Price is Rs.40000/-</h3>
    <h3>Choose accessories from below:-</h3>

    <label> <input type="checkbox" name="cb1" onChange={(e)=>setcb1(e.target.checked)}/>64 GB Pen Drive {cb1? <b>Rs.575</b>:null}</label><br/>
    <label> <input type="checkbox" name="cb2" onChange={(e)=>setcb2(e.target.checked)}/>Cooling Pad {cb2 && <b>Rs.1000</b>}</label><br/>
    <label> <input type="checkbox" name="cb3" onChange={(e)=>setcb3(e.target.checked)}/>Wireless keyboard & Mouse {cb3?<b>Rs.1450</b>:null}</label><br/>
    <label> <input type="checkbox" name="cb4" onChange={(e)=>setcb4(e.target.checked)}/>Headphones {cb4?<b>Rs.400</b>:null}</label><br/>
    
    <button onClick={onsubmit}>Submit</button><br></br>
    
    Accessories Bill is Rs.{gacc}<br/>
    Grand Total is Rs.{gtot}<br/>
    </div>
    );
}
export default Mycomp3