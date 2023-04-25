import { useState } from "react"
const Mycomp5=()=>
{
    const[co,setco]=useState();

    // ::::::::::Commented part is other way to do the same program with button::::::::: //
    
    // const[curr,setcurr]=useState();
    // var showcurr=()=>
    // {
    //   if(co==="Rupees")
    //   {
    //    setcurr("Indian rs");
    //   }
    // }
    return(
      <div className="App">
        <h2>Currency Finder</h2>
        <select onChange={(e)=>setco(e.target.value)}>
            <option value="Please choose any Option">Choose Country</option>
            <option value="Rupees">India</option>
            <option value="USD">USA</option>
            <option value="Yuan">China</option>
            <option value="AUSD">Australia</option>
            <option value="CUSD">Canada</option>
        </select><br/>        
        {co}
        {/* <button onClick={showcurr}>Submit</button><br/>
        {curr} */}
      </div>
    );
}
export default Mycomp5