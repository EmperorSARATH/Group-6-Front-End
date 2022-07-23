import { Routes } from "react-router-dom";
import { Route, Link,} from "react-router-dom";
import './style/sidebar.css'
import Login from "./login";

const AdminDashboard = () => {
    return(
        <div className="Heading">
         <h2>Welcome Admin {localStorage.getItem("username")}</h2>

         <div className="container-sidebar">
        

        <ul className="sidebar">
           
            <li><span></span><span><Link to='/admin/dignostic-center' style={{ textDecoration: 'none' }} >Diagnostic center </Link></span></li>
            <li><span></span><span><Link to='/admin/diagnostic-test'>Diagnostic Test</Link></span></li>
            <li><span></span><span><Link to="/admin/view_all_appointments">View Appointments</Link></span></li>
            <li><span><i></i></span><span><Link to="/admin/view_user" style={{ textDecoration: 'none' ,color:'white' }} >View Users</Link></span></li>
      
            <li><span></span><span><Link to="/admin/set_status">Set Status</Link></span></li>
            <li><span></span><span><Link to="/login" style={{ textDecoration: 'none' }}>Logout</Link></span></li>
            
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

export default AdminDashboard;