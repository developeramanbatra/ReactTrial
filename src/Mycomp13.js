import { useState } from 'react'; import './App.css';
var Mycomp13=() =>
{
    const [selcHobb, setselcHobb] = useState([]);
    var handleChange = (hobbies)=>
        {
            var selectedvalues = [];
            for(var i=0;i<hobbies.length;i++)
            {
                selectedvalues.push(hobbies[i].value)
            }
            setselcHobb(selectedvalues);
        }

    return(
    
    <div className='App'>
        <h2>Choose Hobbies</h2>
        <select name="hobb" size="5" multiple={true} onChange={(e)=>handleChange(e.target.selectedOptions)}>
          <option value="">Choose</option>
          <option>Singing</option>
          <option>Painting</option>
          <option>Dancing</option>I
          <option>Sleeping</option>
          <option>Instagram</option>
          <option>Sports</option>
        </select>
    {
    selcHobb.map((item,i)=>
    <p key={i}>{item}</p>
    )
    }
    </div>
    )
}
export default Mycomp13