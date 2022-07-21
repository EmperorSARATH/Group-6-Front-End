import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './style/Add_Diagnostic.css';

export default class Diagnostic_remove extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            id:''
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
            redirect: false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const Appointment = {
            
            id : this.state.id,
    
        };
       
       
        console.log(Appointment);
        axios.delete(`http://localhost:8080/appointment/remove/${localStorage.getItem("id")}`,Appointment)
        .then(res=>{
            console.log(res.data)
            alert("succussfully removed")

        })
        .catch((er)=>console.log(er))
    }

    render(){
        
        return(
            <div>
                <h2>Remove Appointment</h2>
                <div>
                <form ref="form" onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label >ID</label>
                         <input type="number" name="id" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="id" value={this.state.id}  required />
                         {localStorage.setItem("id",this.state.id)}
                      
                    </div>
                </div>
                <br/>
                <div >
                    <div>
                        <Button type ="submit" className="btn2" variant="contained">Remove Diagnostic center</Button>
                    </div>
                </div>
            </form>

                </div>
            </div>
        )
    }
}