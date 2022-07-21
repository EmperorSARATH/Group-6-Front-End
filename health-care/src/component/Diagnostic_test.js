import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const Diagnostic_test =()=>{
    return(
        <div>
            <h1>Diagnostic test</h1>
            <ul><Button variant="contained" color="success"><Link to="/admin/dignostic-test-add" style={{ textDecoration: 'none' ,color:'white' }}>Add test</Link></Button></ul>
        </div>
    );
}

export default Diagnostic_test;