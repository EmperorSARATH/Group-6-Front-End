import React from 'react';
//import { Navbar } from 'react-bootstrap';
//import './style/sidebar.css';
import './style/Dashboard.css';
import { Route, Link,  Routes} from "react-router-dom";
import Login from "./login";
//import Profile from './profile';
//import Take_test from './take_test';
const Dashboard = () => {
        return(
            <div>
             <h2 className='welcome-nav'>Welcome {localStorage.getItem("username")}</h2>
             <div className="container-sidebar-user">
        

        <ul className="dashboard-ul" >
                
          
            
            <li><span><i className="fa fa-book"></i></span><span><Link to='/user/appointment' style={{ textDecoration: 'none' ,color:'black' }} >Appointment</Link></span></li>
           
            <li><span><i className="fa fa-gear"></i></span><span><Link to="/login" style={{ textDecoration: 'none' ,color:'black' }}>Logout</Link></span></li>
           
            <Routes>
                    <Route exact path="/login" component={Login} />
                
            </Routes>
        </ul>
     

        <div className="content">

        </div>
    </div>





        </div>
        );

    
}

export default Dashboard;