import React from 'react';
import axios from 'axios';
import './style/signup.css';

//import './style/view_category.css';
import './style/view_profile.css';



export default class View_test extends React.Component {
    state = {
      test: []
    }
    componentDidMount() {
      axios.get(`http://localhost:8080/viewalltest`)
        .then(res => {
          const test = res.data;
         console.log(test);
           this.setState({test});
        }).catch((er)=>alert("some error"))
    }
  
    render() {
        
      return (
  
      <div>
        <h1>Test Details</h1>
          <div className='view_profile'>
            
               <ul className='view_ui'>
           {
            this.state.test
              .map((test,Index) =>
       
                
                  <form className='form'>
                    <li  key={Index}>
                    <h3> Name : {test.testName} || Test_id:{test.id}</h3> </li>

                  </form>
                   

              )
          }

        </ul>
          </div>

          </div>
      )
    }
  }

