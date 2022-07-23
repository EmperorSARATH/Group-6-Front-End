import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const Diagnostic_test =()=>{
    return(
        <div>
            <h1>Diagnostic test</h1>
            <ul><Button variant="contained" color="success"><Link to="/admin/add-test" style={{ textDecoration: 'none' ,color:'white' }}>Add test</Link></Button></ul>
            <ul><Button variant="contained" color="secondary"><Link to="/admin/view-test" style={{ textDecoration: 'none' ,color:'white' }}>View test</Link></Button></ul>
            <ul><Button variant="contained" color="error"><Link to="/admin/remove-test" style={{ textDecoration: 'none' ,color:'white' }}>Remove test</Link></Button></ul>
        </div>
    );
}

export default Diagnostic_test;