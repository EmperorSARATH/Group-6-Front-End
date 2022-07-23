import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './style/Add_Diagnostic.css';

export default class Diagnostic_add extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            name:'',
            contactNo:'',
            address:'',
            email:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
       
        this.setState({
            [event.target.name] : event.target.value,
           
        });
       
       
    }
    handleSubmit(event){
        event.preventDefault();
        const Diagnostic = {
            
            name : this.state.name,
            contactNo : this.state.contactNo,
            address:this.state.address,
            email:this.state.email
        };
        if( !(this.state.contactNo.match('[0-9]{10}')) ){
            alert('Please provide valid phone number');
       }else{
            
       
        console.log(Diagnostic);
        axios.post(`http://localhost:8080/DiagnosticCenter/add`,Diagnostic)
        .then(res=>{
            console.log(res.data)
            alert("succussfully added")
        })
        .catch((er)=>alert("Diagnostic cannot be added"))
    }
    }
    render(){
        return(
            <div>
                <h2>Add Diagnostic Center</h2>
                <div>
                <form  ref="form" onSubmit={this.handleSubmit}>
           
                <div>
                    <div >
                        &nbsp; &nbsp; &nbsp;
                     
                        <label>Name</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                         <input type="text" name="name" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="name" value={this.state.name}  required />
                       
                    </div>
                </div>
                <div>
                    <div >
                      
                        <label>ContactNo</label>
                        &nbsp; 
                        <input type="number" name="contactNo" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="contactNo" value={this.state.contactNo} required/>
                     
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label>Address</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="text" name="address" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="Address" value={this.state.address} required/>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label>Email</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="Email" value={this.state.email} required/>
                        
                    </div>
                </div>
                <br/>
                <div >
                    <div >
                        <Button type ="submit" className="btn2" variant="contained">Add Diagnostic_center</Button>
                    </div>
                </div>
            </form>
                </div>
            </div>
        )
    }
}