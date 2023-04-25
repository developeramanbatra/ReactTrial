//:::::::::::::::::::::::::::::TARUN CODE::::::::::::::::::::::::


// import { useState } from "react"

// const Mycomp5=()=>
// {
//     const[cdx1,setcdx1]=useState()
//     const[cdx2,setcdx2]=useState()
//     const[cdx3,setcdx3]=useState()
//     const[cdx4,setcdx4]=useState()
//     const[bill,setbill]=useState()
//     const[totalbill,settotalbill]=useState()
//     const[flag,setflag]=useState(false)
//     const[discount,setdiscount]=useState()
//     const[remainingbill,setremainingbill]=useState()
//     const[gst,setgst]=useState()
//     const[finalprize,setfinalprize]=useState()
//     var accbill=0
//     var disc=0
//     const total=()=>
//     {
//         setflag(true)
//         if(cdx1===true)
//         {
              
//             accbill+=1550
//         }
//         if(cdx2===true)
//         {
//             accbill+=3000
//         }
//         if(cdx3===true)
//         {
//             accbill+=8000
//         }
//         if(cdx4===true)
//         {
//             accbill+=10000
//         }
//         setbill(accbill)
//         settotalbill(40000+parseInt(accbill))
//         settotalbill(40000+accbill)
//         var tamount=(40000+accbill)


//         if(accbill>=5000)
//         {
//             disc=((18*accbill)/100)
//         }
//         else if(accbill>=3500)
//         {
//             disc=((7*accbill)/100)
//         }
//         else if(accbill>=2000)
//         {
//             disc=((5*accbill)/100)
//         }
//         setdiscount(disc)
//         setremainingbill(tamount-disc)
//         var remainingamount=(tamount-disc)
//         var tax=((18*remainingamount)/100)
//         setgst(tax)
//         setfinalprize(tax+remainingamount)

//     }

//     return(
//         <div>
//         <h1>billing system</h1>
//         <h3>laptop base prize is RS-40000/-</h3>
//         <h3>choose accessories from below:-</h3>
//        <label><input type="checkbox" name="cdx1" onChange={(e)=>setcdx1(e.target.checked)}></input>128gb pendrive{cdx1?<b>-Rs-1550/</b>:null}</label> <br/>
//        <label><input type="checkbox" name="cdx2" onChange={(e)=>setcdx2(e.target.checked)}></input>
//         cooling pad{cdx2?<b>-Rs-3000/</b>:null}</label> <br/>
//        <label><input type="checkbox" name="cdx3" onChange={(e)=>setcdx3(e.target.checked)}></input>
//         wireless mouse{cdx3?<b>-Rs-8000/</b>:null}</label> <br/>
//        <label><input type="checkbox" name="cdx4" onChange={(e)=>setcdx4(e.target.checked)}></input>
//         1tb pendrive{cdx4?<b>-Rs-10000/</b>:null}</label> <br/>
//         <button onClick={total}>total</button>
//         {flag?
//         <div> 
//             <h1>accessories amount is {bill}</h1>
//             <h1>total amount is {totalbill}</h1>
//             <h1>discount amount is {discount}</h1>
//             <h1>remaining amount is {remainingbill}</h1>
//             <h1> GST is {gst}</h1>
//             <h1>Finall amount is {finalprize}</h1>
//             </div>:null
//         }
//         </div>
//     )
// }
// export default Mycomp5





//:::::::::::::::::::::::::::VARUN CODE:::::::::::::::::::::::::::::::::::::

// import { useState } from 'react';
// import './App.css';

// function App() {
// const[cbx1,setCbx1]=useState();
// const[cbx2,setCbx2]=useState();
// const[cbx3,setCbx3]=useState();
// const[cbx4,setCbx4]=useState();
// const[cbx5,setCbx5]=useState();
// const[gacc,setGacc]=useState();
// const[gbill,setGbill]=useState();
// const[dsc,setDsc]=useState();
// const[rema,setRema]=useState();
// const[flag,setFlag]=useState(false);
// const[gst,setGst]=useState();
// const[fb,setFb]=useState();

// var onSubmit=()=>{
//   setFlag(true)
//     var accbill=0
//     var disc = 0
//     var totbl = 0
//     var rma = 0
//     var gsta = 0
//     var fba = 0
//     if(cbx1===true)
//     {
//       accbill+=750
//     }
//     if(cbx2===true)
//     {
//       accbill+=1000
//     }
//     if(cbx3===true)
//     {
//       accbill+=1450
//     }
//     if(cbx4===true)
//     {
//       accbill+=400
//     }
//     if(cbx5===true)
//     {
//       accbill+=2000
//     }
//     totbl = 40000 + accbill
//     if(accbill>=5000)
//     {
// disc = totbl*10/100
//     } 
//     else if(accbill>=3500)
//     {
// disc = totbl*8/100
//     }
//     else if(accbill>=2000)
//     {
// disc = totbl*5/100
//     }
//     setGacc(accbill)
//     setGbill(40000+accbill)
//     setDsc(disc)
//     rma = Number(totbl)-Number(disc)
//     setRema(rma)
//     gsta = (Number(totbl)-Number(disc))*18/100
//     setGst(gsta)
//     fba = rma + gsta
//     setFb(fba)
// }
//   return (
//     <div className="App">
//       <h2>Billing System</h2>
//       <h3>Laptop Base price is Rs. 40000</h3>
//       <h3>Choose Accessories</h3><br /><br />
//       <label htmlFor="cbx1"><input type="checkbox" name="cbx1" id="cbx1" onChange={(e)=>setCbx1(e.target.checked)} />64GB Pen Drive {cbx1 && <b> - Rs. 750</b>}</label><br /><br />
//       <label htmlFor="cbx2"><input type="checkbox" name="cbx2" id="cbx2" onChange={(e) => setCbx2(e.target.checked)} />Cooling Pad {cbx2 && <b> - Rs. 1000</b>}</label><br /><br />
//       <label htmlFor="cbx3"><input type="checkbox" name="cbx3" id="cbx3" onChange={(e) => setCbx3(e.target.checked)} />Wireless Keyboard & Mouse {cbx3 && <b> - Rs. 1450</b>}</label><br /><br />
//       <label htmlFor="cbx4"><input type="checkbox" name="cbx4" id="cbx4" onChange={(e) => setCbx4(e.target.checked)} />Headphones {cbx4 && <b> - Rs. 400</b>}</label><br /><br />
//       <label htmlFor="cbx5"><input type="checkbox" name="cbx5" id="cbx5" onChange={(e) => setCbx5(e.target.checked)} />Speakers {cbx5 && <b> - Rs. 2000</b>}</label><br /><br />
//       <button type="submit" onClick={onSubmit}>Submit</button><br /><br />
//       {
//         flag===true?
//         <div>
//       Accessories Bill: {gacc}<br /><br />
//       Total Bill: {gbill}<br /><br />
//       Discount: {dsc}<br /><br />
//       Remaining Amount: {rema}<br /><br />
//       GST in Rs: {gst} <br /><br />
//       Final Bill is Rs.: {fb}<br /><br />
//       </div>:null
// }
//     </div>
//   );
// }

// export default App