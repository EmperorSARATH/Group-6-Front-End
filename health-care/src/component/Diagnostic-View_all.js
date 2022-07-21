import React from 'react';
import axios from 'axios';
import './style/signup.css';

//import './style/view_category.css';
import './style/view_profile.css';



export default class Diagnostic_View_all extends React.Component {
    state = {
      diagnostic: []
    }
    componentDidMount() {
      axios.get(`http://localhost:8080/DiagnosticCenter/getall`)
        .then(res => {
          const diagnostic = res.data;
         console.log(diagnostic);
           this.setState({diagnostic});
        }).catch((er)=>alert("some error"))
    }
  
    render() {
        
      return (
  
      <div>
        <h1>Diagnostic Details</h1>
          <div className='view_profile'>
            
               <ul className='view_ui'>
           {
            this.state.diagnostic
              .map((diagnostic,Index) =>
       
                
                  <form className='form'>
                    <li  key={Index}>
                    <h3> Name : {diagnostic.name} || Center_id:{diagnostic.id} || Contact:{diagnostic.contactNo}</h3> </li>

                  </form>
                   

              )
          }

        </ul>
          </div>

          </div>
      )
    }
  }

