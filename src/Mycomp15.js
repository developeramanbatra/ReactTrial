//ToDo List App Assignment

import { useState } from "react"
var Mycomp15=()=>
{
    const[tasklist,settasklist]=useState([])
    const[taskname,settaskname]=useState("")
    const[flag,setflag]=useState(false)
    var addtask=()=>
    {
        if(taskname!=="")
        {
            setflag(true);
            settasklist([...tasklist,taskname])
            settaskname("")
        }
        else
        {
            alert("Please Enter Task")
        }
    }
    var deltask=(indx)=>
    {
        var uchoice=window.confirm("Are You sure to delete?")
        if(uchoice===true)
        {
            var list=[...tasklist];
            list.splice(indx,1);
            settasklist(list);
            if(list.length===0)
            {
                setflag(false);
            }
        }
    }
    return(
        <div className="App">
            <h1>ToDo List App</h1>
            <input type="text" placeholder="Taskname" onChange={(e)=>settaskname(e.target.value)}/>
            <button onClick={addtask}>Add Task</button>

            {flag?<>
            <h3>Added Tasks</h3>
            <ul>
                {
                    tasklist.map((item,i)=>
                    <li key={i}>{item} <button onClick={()=>deltask(i)}>Delete</button></li>
                    )
                }
            </ul>
            </>:null}
        </div>
    )
}
export default Mycomp15;