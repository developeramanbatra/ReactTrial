//TEST ASSIGNMENT

import { useState } from "react";
var Mycomp16=()=>
{
    const[gen,setgen]=useState()
    const[name,setname]=useState()
    const[num,setnum]=useState(1)
    const[flag,setflag]=useState()
    const[abill,setabill]=useState()
    const[fbill,setfbill]=useState()
    const[fbillop,setfbillop]=useState()
    const[discount,setdiscount]=useState()
    const[tbill,settbill]=useState()
    const[tax,settax]=useState()
    const[selc,setselc]=useState()
    const[cb1,setcb1]=useState()
    const[cb2,setcb2]=useState()
    const[cb3,setcb3]=useState()
    const[cb4,setcb4]=useState()
    const[cb5,setcb5]=useState()
    const[cb6,setcb6]=useState()

    var calc=()=>
    {
        setflag(true)
        var base=0;
        if(gen==="m")
        {
            base=5000;
        }
        else if(gen==="f")
        {
            base=6500;
        }

        if(cb1===true)
        {
            base+=750;
        }
        if(cb2===true)
        {
            base+=500;
        }
        if(cb3===true)
        {
            base+=550;
        }
        if(cb4===true)
        {
            base+=700;
        }
        if(cb5===true)
        {
            base+=400;
        }
        if(cb6===true)
        {
            base+=600;
        }
       setabill(base);

       var disco=0;
       if(selc==="Student")
       {
        disco=(20*base)/100;
       }
       else if(selc==="Army Member")
       {
        disco=(10*base)/100;
       }
       else if(selc==="Regular Customer")
       {
        disco=(15*base)/100;
       }
       else
       {
        disco=0;
       }
       setdiscount(disco)
       var fbillopp=base-disco;
       setfbillop(fbillopp)
       var tbilln=fbillopp*num
       settbill(tbilln)

       var taxx=(14.5*tbilln)/100;
       settax(taxx);
       var fbilln=tbilln+taxx;
       setfbill(fbilln)
    }

    return(
    <div className="App">
        <h1>My Style Salon</h1>
        
        <table align="center"><tbody>
        <tr>
            <td align="left">
            <h3>Choose Gender</h3>
            </td>
            <td align="left">
        <tr>
        <label><input type="radio" name="gender" value="m" onChange={(e)=>setgen(e.target.value)}/>Male</label>
        </tr>
        <tr>
        <label><input type="radio" name="gender" value="f" onChange={(e)=>setgen(e.target.value)}/>Female</label>
        </tr>
            </td>
        </tr>
        <td align="left"><tr><b>Other Facilties</b></tr></td>
       <tr><td align="left">
        <tr><label><input type="checkbox" id="cb1" value="cb1" onChange={(e)=>setcb1(e.target.checked)}/>SPA (Rs. 750/-)</label></tr>
        <tr> <label><input type="checkbox" id="cb2" value="cb2" onChange={(e)=>setcb2(e.target.checked)}/>Face Cleansing (Rs. 500/-)</label></tr>
        <tr> <label><input type="checkbox" id="cb3" value="cb1" onChange={(e)=>setcb3(e.target.checked)}/>Hair Style ( Rs. 550/-)</label></tr>
       </td>
       <td align="left">
        <tr> <label><input type="checkbox" id="cb4" value="cb1" onChange={(e)=>setcb4(e.target.checked)}/>WAX (Rs. 700/-)</label></tr>
        <tr> <label><input type="checkbox" id="cb5" value="cb1" onChange={(e)=>setcb5(e.target.checked)}/>Bleach (Rs. 400/-)</label></tr>
        <tr> <label><input type="checkbox" id="cb6" value="cb1" onChange={(e)=>setcb6(e.target.checked)}/>Other (Rs. 600)</label></tr>
       </td></tr>
        <tr><td align="left"> <b>Choose Discount Pack</b>   </td>
         <td align="left">
         <select onChange={(e)=>setselc(e.target.value)}>
	          <option>Choose Discount Pack</option>
	          <option>Student</option>
	          <option>Army Member</option>
	          <option>Regular Customer</option>
	          <option>General Customer</option>
            </select>
        </td> </tr>
           <tr align="left"><td><b>Enter your Name</b></td> 
           <td >
            <input type="text"  onChange={(e)=>setname(e.target.value)}/>
        </td></tr>
        <tr align="left"><td> <b>No of Person</b></td>
        <td>
            <input type="number" onChange={(e)=>setnum(e.target.value)}/>
            </td></tr>
            <tr align="right">
            <button onClick={calc}>Calculate Total</button></tr>
        </tbody>
        </table>
            {flag?<>
            Hi {name}<br/>
            Actual bill for one person Rs {abill}/-<br/>
            Discount Rs {discount}/-<br/>
            Final bill for one person after discount of Rs {fbillop}/-<br/>
            Total bill {tbill}/-<br/>
            Tax Rs {tax}/-<br/>
            Final bill Rs {fbill}/-<br/>
            </>:null}
  
    </div>
    )
}
export default Mycomp16;