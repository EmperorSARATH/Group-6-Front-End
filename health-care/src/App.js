import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Signup from "./component/signup";
import Login from "./component/login";
import Dashboard from "./component/Dashboard";
import AdminDashboard from './component/AdminDashboard';
import Diagnostic_add from './component/Diagnostic_add';
import Diagnostic_center from './component/Diagnostic_center';
import pic from "./component/images/healthcare2.png";
import Diagnostic_remove from './component/Diagnostic_remove';
import Diagnostic_View_all from './component/Diagnostic-View_all';
import Dtest_add  from './component/Dtest_add';
import Diagnostic_test_add from './component/Diagnostic_test_add';
import View_profile from './component/View_profile';
import Appointment from './component/Appointment';
import Add_appointment from './component/Add_appointment';
import Remove_appointment from './component/Remove_appointment';
import SetStatus from './component/SetStatus';
import View_status from './component/View_status';
import View_all_appointments from './component/View_all_appointments';
import Diagnostic_test from './component/Diagnostic_test';
import View_test from './component/View_test';
import Remove_test from './component/Remove_test';

const Home = () =>{
  localStorage.clear();
  //console.log(localStorage.getItem("loggedIn") == null)
return(
    <div className='bg-home'>
        <h2 className='texth1'>“Health is the greatest possession.</h2><h2 >Contentment is the greatest treasure.</h2><h2>Confidence is the greatest friend.”</h2>
        
        
            
        <div >
            
             {/*<img className='img' src="./component/images/h1.jpg" alt="text"></img>
             <img className='img' src={pic} alt="text"></img>*/}
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <div className='box1'>
        <p><b>What we do..?</b><br></br><br></br> We believe you deserve the best health care service by making you more comfortabe and keepong you informed 
        on your personal health. We are focused on making the process of health care even better and easier by providing a user friendly 
        environment for serving you.
        </p>
        </div>

        <div className='abt1'>
        <br></br><br></br><br></br>
<h1>About us</h1>
<p className='p1'>We understand that you give great importance to the health of your's and your family members thus we have provided a simple user
freindly platform using which you can book appointments with different diagnostic centers to undertake required diagnostic tests, which is time saving
as well as easy to use thus making your health care more easier. Here we belive that by doing so we can encorage more individuals to perform health care 
routines resulting in a better place with healthy cityzens. One this website we give you the privilage of booking appointments for you or your families
 required diagnostic tests by registering on to the site with the personal informations of the individual for whome the appointment is to be booked, and
 will let you know the status of the appointment regarding the date for the test and venue of the diagostic center.</p>
        </div>

        <br></br><br></br><br></br><br></br><br></br>

       
        </div>


);
}
class App extends Component {  
    constructor(props){
        super(props);
        this.state={
            loggedIn :false
        } 
    }
    render() {  
       
        return (
            <Router>
                <div className="App">
<div className='heading1'>
                        <p><span className='name1'>Health Care</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='details1'><b>contact:&nbsp;9895123082&nbsp;&nbsp;&nbsp; email:&nbsp;abc@gmail.com&nbsp;</b></span></p>
                    </div>
                    
                    <nav className="navbar">
                        <ul className="nav ">
                            <li><Link to="/"><h3 className="nav-bar-options">Home</h3></Link></li>
                            <li><Link to="/login"><h3 className={'nav-bar-options '+ (localStorage.getItem("loggedIn")!=null ? 'd-none':'')}  >Log In</h3></Link></li>
                            <li><Link to="/user/"><h3 className="nav-bar-options">Sign Up</h3></Link></li>
                        </ul>
                      </nav> 
                    <br/>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/login" element={<Login/>}/> 
                        <Route exact path="/user/" element={<Signup/>} />
                        <Route exact path="/login/Dashboard/" element={<Dashboard/>} /> 
                         <Route exact path="/login/AdminDashboard"  element={<AdminDashboard/>} /> 
                  <Route exact path="/admin/dignostic-center" element={<Diagnostic_center/>} />
                  <Route exact path="/admin/dignostic-add" element={<Diagnostic_add/>} />
                  <Route exact path="/admin/diagnostic-remove" element={<Diagnostic_remove/>} />
                  <Route exact path="/admin/dignostic-view-all" element={<Diagnostic_View_all/>} />
                  {/* <Route exact path="/admin/Diagnostic_test" element={<Diagnostic_test/>} /> */}
                  <Route exact path="/admin/dignostic-test-add" element={<Diagnostic_test_add/>} />
                  <Route exact path="/admin/view_user" element={<View_profile/>} />
                  <Route exact path="/admin/add-test" element={<Dtest_add/>} />               
                  <Route exact path="/user/appointment" element={<Appointment/>} />
                  <Route exact path="/user/add-appointment" element={<Add_appointment/>} />
                  <Route exact path="/user/remove-appointment" element={<Remove_appointment/>} />
                  <Route exact path="/admin/set_status" element={<SetStatus/>} />
                  <Route exact path="/user/view-status" element={<View_status/>} />
                  <Route exact path="/admin/view_all_appointments" element={<View_all_appointments/>} />
                  <Route exact path="/admin/diagnostic-test" element={<Diagnostic_test/>} />
                  <Route exact path="/admin/view-test" element={<View_test/>} />
                  <Route exact path="/admin/remove-test" element={<Remove_test/>} />
                  

                     
                    </Routes>
                    
                </div>
            </Router>
        );
    }
}

export default App;
