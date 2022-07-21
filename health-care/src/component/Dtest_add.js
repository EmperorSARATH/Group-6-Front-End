import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './style/Add_Diagnostic.css';

export default class Diagnostic_add extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            normalValue:'',
            testName:'',
            testPrice:'',
            units:''
        
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

        const Test = {
            
            normalValue : this.state.normalValue,
            testName : this.state.testName,
            testPrice:this.state.testPrice,
            units:this.state.units
        };
        console.log(Test);
        axios.post(`http://localhost:8080/addtest`,Test)
        .then(res=>{
            console.log(res.data)
            alert("succussfully added")

        })
        .catch((er)=>alert("Diagnostic cannot be added"))

    }
    render(){
        return(
            <div>
                <h2>Add Test</h2>
                <div>
                <form ref="form" onSubmit={this.handleSubmit}>
                <div >
                    <div>
                        <label >normalValue</label>
                         <input type="text" name="normalValue" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="normalValue" value={this.state.normalValue}  required />
                      
                    </div>
                </div>
                <div>
                    <div>
                        <label>testName</label>
                        <input type="text" name="testName" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="testName" value={this.state.testName} required/>
                    </div>
                </div>

                <div>
                    <div>
                        <label>testPrice</label>
                        <input type="text" name="testPrice" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="testPrice" value={this.state.testPrice} required/>
                    </div>
                </div>

                <div >
                    <div>
                        <label>units</label>
                        <input type="text" name="units" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="units" value={this.state.units} required/>
                    </div>
                </div>

                <br/>
                <div>
                    <div>
                        <Button type ="submit" className="btn2" variant="contained">Add Test</Button>
                    </div>
                </div>
            </form>

                </div>
            </div>
        )
    }
}