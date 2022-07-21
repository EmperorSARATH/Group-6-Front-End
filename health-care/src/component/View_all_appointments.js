import React, { useState,useEffect } from 'react';

import axios from 'axios';

import './style/signup.css';
function View_all_appointments() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setLoading] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [appointment, setAppointment] = useState();
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      axios.get("http://localhost:8080/appointment/getall").then(response => {
        setAppointment(response.data);
        console.log(response.data);
        console.log("inside axios");
        setLoading(false);
      }).catch((er)=>alert("some error"));
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div >
         {
        appointment
              .map((appointment,Index) =>
              <div className='view_all_apt'>
                <form className='form-apt'>
                <li  key={Index} className='li-apt'>
                 

                  <h4>id:{appointment.id}|| Approval Status:{appointment.approvalStatus.toString()}</h4> 


                  </li>
                  
               </form>
                
                </div>
              )
          }
      </div>
    );
  }
  export default View_all_appointments;