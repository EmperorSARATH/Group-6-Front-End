import {Link} from "react-router-dom";
import {Button} from "@mui/material";
const Appointment =()=>{
    return(
        <div>
           <h1>Appointment</h1> 
           <ul><Button variant="contained" color="success"><Link to="/user/add-appointment" style={{ textDecoration: 'none' ,color:'white' }}>Add Appointment</Link></Button></ul>
           <ul><Button variant="contained" color="error"><Link to="/user/remove-appointment" style={{ textDecoration: 'none' ,color:'white' }}>Remove Appointment</Link></Button></ul>
           <ul><Button variant="contained" color="secondary"><Link to="/user/view-status" style={{ textDecoration: 'none' ,color:'white' }}>View Status</Link></Button></ul>
          
        </div>
    );
}

export default Appointment;