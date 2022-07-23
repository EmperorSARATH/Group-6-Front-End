import React from 'react';
import axios from 'axios';
import './style/signup.css'
import Button from '@mui/material/Button';


export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '' ,
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value

        });
    }
    handleSubmit(event){
        event.preventDefault();
        

        const user = {


            password : this.state.password,
            username : this.state.username
           
        
        
           

        };
        console.log(user);
        axios.post(`http://localhost:8080/User/register`,user)
        .then(response => {
            alert("successful");
            
         }).catch(error => {
        
            alert("Username already exists");
         })

    }
   


    render(){
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>

                <div>
                        <div>
                            <label >User Name</label>
                            <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleusername1" placeholder="User Name" value={this.state.username} required />
                        </div>
                    </div>
                
                <div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>

                </div>
                <br/>
                
                <div>
                    <div>
                        
                    <Button type ="submit" variant="contained">Sign Up</Button>
                        
                    </div>
                </div>
            
            </form>
            

        )
    }
}

