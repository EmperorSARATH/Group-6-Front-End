import React from "react";
import Button from "@mui/material/Button";
import axios from 'axios';
export default class Add_appointment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        approvalStatus:'',
        date: '',
        id:"",
        patient: [{ 
            patientid: ''
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
        const status = {
            approvalStatus:this.state.approvalStatus,
            date : this.state.date,
            id:this.state.id,
           patient:[{
            patientid : this.state.patientid
            
            }]
            // name:this.state.patient.name,
            // phoneNo:this.state.patient.phoneNo,
            // age:this.state.patient.age,
            // gender:this.state.patient.gender
            
        };
        //const { name, phoneNo,age,gender } = this.state
            //const appointments = { name, phoneNo,age,gender }
        console.log(status);
        axios.put(`http://localhost:8080/appointment/update`,status)
        .then(Request=>{
            //console.log(res)
            console.log(Request.data)
            alert("succcessful")

        })
        .catch((er)=>alert("status changed"))
    }
    render() {
      const { patientid } = this.state.patient;
      return (
        <div>
             <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>

             <div className="col-sm-10 spacing">
                        <label >Approval status</label>
                         <input type="text" name="approvalStatus" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="approvalStatus" defaultValue={this.state.approvalStatus}  required />
        
            </div>

            <div className="col-sm-10 spacing">
                        <label >Date</label>
                         <input type="text" name="date" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="Date" defaultValue={this.state.date}  required />
        
            </div>

            <div className="col-sm-10 spacing">
                        <label >Appointment Id</label>
                         <input type="text" name="id" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="id" defaultValue={this.state.id}  required />
        
            </div>

          Patient Id:
          <input defaultValue={patientid} onChange={this.handleChange} name='patientid' />
          <br/>



          <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                       
                        <Button type ="submit" className="btn2" variant="contained">Set appointment</Button>

        
                    </div>
                </div>

                </form>
        </div>
      );
    }
  };