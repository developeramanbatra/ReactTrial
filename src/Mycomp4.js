// My Component 4 Portion

import { useState } from "react"
const Mycomp4=()=>
{
    const[gacc,setgacc]=useState(0);
    const[gtot,setgtot]=useState(40000);
    const[cb1,setcb1]=useState();
    const[cb2,setcb2]=useState();
    const[cb3,setcb3]=useState();
    const[cb4,setcb4]=useState();
    const[gdis,setgdis]=useState();
    const[rbill,setrbill]=useState();
    const[gfbill,setgfbill]=useState();
    const[gst,setgst]=useState();
    const[flag,setflag]=useState(false);
   
    var onsubmit=()=>
    {
        setflag(true)
      var accbill=0;
      var totbill=0;
      var dis=0;
      var fbill=0;
      var rmbill=0;
      var gst1=0;

      if(cb1===true)
      {
        accbill+=4000;
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
        accbill+=1200;
      }
      var totbill=40000+accbill;
      setgacc(accbill);
      setgtot(40000+accbill); 

      if(accbill>=5000)
      {
        dis=(10*totbill)/100;
      }
      else if(accbill>=3500)
      {
        dis=(7*totbill)/100;
      }
      else if(accbill>=2000)
      {
        dis=(5*totbill)/100;
      }
      else
      {
        dis=0;
      }
      
      setgdis(dis)

      rmbill=parseInt(totbill)-parseInt(dis)
      setrbill(rmbill)

      gst1=(18*rmbill)/100
      setgst(gst1)

      fbill=gst1+rmbill
      setgfbill(fbill)
    }
    return(
    <div className="App">
        
    <h2>Billing System</h2>
    <h3>Laptop Base Price is Rs.40000/-</h3>
    <h3>Choose accessories from below:-</h3>

    <label><input type="checkbox" name="cb1" onChange={(e)=>setcb1(e.target.checked)}/>512 GB Samsung SSD {cb1?<b>Rs.4000</b>:null}</label><br/>
    <label><input type="checkbox" name="cb2" onChange={(e)=>setcb2(e.target.checked)}/>Cooling Pad {cb2?<b>Rs.1000</b>:null}</label><br/>
    <label><input type="checkbox" name="cb3" onChange={(e)=>setcb3(e.target.checked)}/>Wireless keyboard & Mouse {cb3?<b>Rs.1450</b>:null}</label><br/>
    <label><input type="checkbox" name="cb4" onChange={(e)=>setcb4(e.target.checked)}/>Headphones with Mic {cb4?<b>Rs.1200</b>:null}</label><br/><br/>
    
    <button onClick={onsubmit}>Submit</button><br/><br/>
    
    {flag?
    <div>
    Accessories Bill is Rs.<b>{gacc}</b><br/>
    Total Bill is Rs.<b>{gtot}</b><br/>
    Discount is Rs.<b>{gdis}</b><br/>
    Remaining Bill is Rs.<b>{rbill}</b><br/>
    GST is Rs.<b>{gst}</b><br/>
    Final Bill is Rs.<b>{gfbill}</b><br/>
    </div>:null}
    </div>
    );
}
export default Mycomp4