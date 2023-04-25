//ListBox with places to visit assignment

import { useState } from "react"

var Mycomp14=()=>
{
    const[placestovisit,setplacestovisit]=useState([])
    const[flag,setflag]=useState(false)
    var handlechange=(selecteditems)=>
    {
        const ptovisit=[]
        setflag(true)
        for(var i=0;i<selecteditems.length;i++)
        {
            if(selecteditems[i].value==="Punjab")
            {
                ptovisit.push("Harmandir Sahib")
                ptovisit.push("Devi Talab Mandir")
                ptovisit.push("Niku Park Jalandhar")
            }
            if(selecteditems[i].value==="Himachal Pradesh")
            {
                ptovisit.push("Chintpurni")
                ptovisit.push("Kempty fall")
                ptovisit.push("Manikaran Sahib")
            }
            if(selecteditems[i].value==="Rajasthan")
            {
                ptovisit.push("Jaipur")
                ptovisit.push("Pushkar")
                ptovisit.push("Jodhpur")
            }
        }
        setplacestovisit(ptovisit)
    }
    return(
        <div className="App">
        <h2>Trip Advisor</h2>
        <select size="4" multiple={true} onChange={(e)=>handlechange(e.target.selectedOptions)}>
            <option>Choose State</option>
            <option>Punjab</option>
            <option>Himachal Pradesh</option>
            <option>Rajasthan</option>
        </select>
        {flag?<>
        <h2>Places to visit</h2>
        <ul>
        {
            placestovisit.map((item)=>
            <li>{item}</li>
            )
        }
        </ul>
        </>:null}
        </div>
    )
}
export default Mycomp14;




// //ListBox with places to visit assignment

// import { useState } from "react"

// var Mycomp14=()=>
// {
//     const[placestovisit,setplacestovisit]=useState([])
//     const[handlechange,sethandlechange]=useState()
//     const[flag,setflag]=useState(false)
//     var ehandlechange=()=>
//     {
//         const ptovisit=[]
//         setflag(true)
//         for(var i=0;i<selecteditems.length;i++)
//         {
//             if(selecteditems[i].value==="Punjab")
//             {
//                 ptovisit.push("Harmandir Sahib")
//                 ptovisit.push("Devi Talab Mandir")
//                 ptovisit.push("Niku Park Jalandhar")
//             }
//             if(selecteditems[i].value==="Himachal Pradesh")
//             {
//                 ptovisit.push("Chintpurni")
//                 ptovisit.push("Kempty fall")
//                 ptovisit.push("Manikaran Sahib")
//             }
//             if(selecteditems[i].value==="Rajasthan")
//             {
//                 ptovisit.push("Jaipur")
//                 ptovisit.push("Pushkar")
//                 ptovisit.push("Jodhpur")
//             }
//         }
//         setplacestovisit(ptovisit)
//     }
//     return(
//         <div className="App">
//         <h2>Trip Advisor</h2>
//         <select size="4" multiple={true} onChange={(e)=>sethandlechange(e.target.selectedOptions)}>
//             <option>Choose State</option>
//             <option>Punjab</option>
//             <option>Himachal Pradesh</option>
//             <option>Rajasthan</option>
//         </select>
//         <button onClick={ehandlechange}>Submit</button><br></br>

//         {flag?<>
//         <h2>Places to visit</h2>
//         <ul>
//         {
//             placestovisit.map((item,i)=>
//             <li>{item}</li>
//             )
//         }
//         </ul>
//         </>:null}
//         </div>
//     )
// }
// export default Mycomp14