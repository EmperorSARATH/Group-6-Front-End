import { Button } from "@mui/material";
import {Link} from "react-router-dom";
const Diagnostic_center =()=>{
    return(
        <div>
           <h1 style={{color:'black',textShadow: '-1px -1px #ffffff, -1px 1px #ffffff, 1px -1px #ffffff, 1px 1px #ffffff', marginRight:'550px',marginLeft:'550px'}}>Diagnostic Center Options</h1> 
            <ul><Button variant="contained" color="success"><Link to="/admin/dignostic-add" style={{ textDecoration: 'none' ,color:'white' }}>Diagnostic_add</Link></Button></ul><br/>
            <ul><Button variant="contained" color="error"><Link to="/admin/diagnostic-remove" style={{ textDecoration: 'none' ,color:'white' }}>Diagnostic_remove</Link></Button></ul><br/>
            <ul><Button variant="contained" color="warning"><Link to="/admin/dignostic-test-add" style={{ textDecoration: 'none' ,color:'white' }}>Diagnostic_test_add</Link></Button></ul><br/>
            <ul><Button variant="contained" color="secondary"><Link to="/admin/dignostic-view-all" style={{ textDecoration: 'none' ,color:'white' }}>Diagnostic_View_all</Link></Button></ul><br/>
        </div>
        
    );
}

export default Diagnostic_center;