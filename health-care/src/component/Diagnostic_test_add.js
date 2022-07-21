import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

import './style/Add_Diagnostic.css';

export default class Diagnostic_test_add extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            diagnosticCenterId:'',
            testId:'',
         
        
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
            
            diagnosticCenterId : this.state.diagnosticCenterId,
            testId : this.state.testId
        };
        console.log(Diagnostic);
        axios.post(`http://localhost:8080/DiagnosticCenter/addtest/${localStorage.getItem('diagnosticCenterId')}/${localStorage.getItem('testId')}`,Diagnostic)
        .then(res=>{
            console.log(res.data)
            alert("succussfully added")

        })
        .catch((er)=>alert("Diagnostic cannot be added"))
    }
    render(){
        return(
            <div>
                <h2>Add Diagnostic Center</h2>
             <div>
                <form ref="form" onSubmit={this.handleSubmit}>
                <div >
                    <div>
                        <label >DId</label>
                         <input type="text" name="diagnosticCenterId" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="diagnosticCenterId" value={this.state.diagnosticCenterId}  required />
                         {localStorage.setItem("diagnosticCenterId",this.state.diagnosticCenterId)}
                    </div>
                </div>
              

            

                <div>
                    <div>
                        <label>TId</label>
                        <input type="text" name="testId" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="testId" value={this.state.testId} required/>
                        {localStorage.setItem("testId",this.state.testId)}
                    </div>
                </div>

                <br/>
                <div>
                    <div>
                        <Button type ="submit" className="btn2" variant="contained">Add Diagnostic_center</Button>
                    </div>
                </div>
            </form>

                </div>
            </div>
        )
    }
}