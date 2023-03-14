import React from 'react'
import axios from "axios";
import Navbar from '../components/nav/Navbar';
export default function Activities() {
    
/*
const options = {method: 'GET', url: 'http://localhost:4000/api/v1/activities'};

 axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
 */  return (
    <div className='h-screen bg-darkPurple'>
      Activities
        <Navbar/>
    </div>
    
  )
}
