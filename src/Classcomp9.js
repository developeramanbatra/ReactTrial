import { Component } from 'react';
import pic1 from './images/RedFort.jpg';
import pic2 from './images/VictoriaMemorial.jpg';
import pic3 from './images/BurjKhalifa.jpg';

class Classcomp9 extends Component
{
    constructor()
    {
        super()
        this.state={picname:0}
    }
    render()
    {
        return(
            <div className='App'>
            <h2>Choose Below</h2>
                <label><input type="radio" name="picc" onClick={()=> this.setState({picname:pic1})}/>Red Fort</label><br/><br/>
                <label><input type="radio" name="picc" onClick={()=> this.setState({picname:pic2})}/>Victoria Memorial</label><br/><br/>
                <label><input type="radio" name="picc" onClick={()=> this.setState({picname:pic3})}/>Burj Khalifa</label><br/><br/>

            <img src={this.state.picname} height='350' />
            </div>
        )
    }
}
export default Classcomp9