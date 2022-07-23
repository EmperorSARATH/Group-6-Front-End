import React from "react";
import Button from "@mui/material/Button";
import axios from 'axios';
export default class Add_appointment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: '',
        patient: [{ 
             name: '', 
             phoneNo: '', 
             age:0,
             gender: '' 
        }]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleChange = (e,i) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
      console.log('updating patient: ', i);
    //   this.setState(
    //     prev => ({
    //       ...prev,
    //       patient: {
    //         ...prev.patient,
    //         ...i
    //       }
    //     })
    //   );
    };

    handleSubmit(event){
        event.preventDefault();
        //this.props.history.push('/login/Dashboard')
        const appointment = {
            
            date : this.state.date,
           patient:[{
                name: this.state.name,
                phoneNo:this.state.phoneNo,
                age:this.state.age,
                gender:this.state.gender
            }]
            // name:this.state.patient.name,
            // phoneNo:this.state.patient.phoneNo,
            // age:this.state.patient.age,
            // gender:this.state.patient.gender
            
        };
        //const { name, phoneNo,age,gender } = this.state
            //const appointments = { name, phoneNo,age,gender }
        console.log(appointment);
        axios.post(`http://localhost:8080/appointment/add`,appointment)
        .then(Request=>{
         


            //console.log(res)
            console.log(Request.data)
            alert("succussfully added")

        })
        .catch((er)=>alert("Diagnostic cannot be added"))
    }
    render() {
      const { name,age,phoneNo,gender} = this.state.patient;
      return (
        <div>
             <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
            <div className="col-sm-10 spacing">
                        <label >Date</label>
                         <input type="date" name="date" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="Date" defaultValue={this.state.date}  required />
        
            </div>

          Name:
          <input defaultValue={name} onChange={this.handleChange} name='name' />
          <br/>
          Age:
          <input defaultValue={age} onChange={this.handleChange} name='age' type="number" />
          <br/>
          Phone:
          <input defaultValue={phoneNo} onChange={this.handleChange} name='phoneNo' />
          <br/>
          gender
          <input defaultValue={gender} onChange={this.handleChange} name='gender' />
          

          <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <br/>
                        <Button type ="submit" className="btn2" variant="contained">Add Appointment</Button>

 
                    </div>
                </div>

                </form>
        </div>
      );
    }
  };