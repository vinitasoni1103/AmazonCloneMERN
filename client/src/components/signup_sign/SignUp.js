import React, { useState } from 'react'
import { Divider } from '@mui/material';
import "./signup.css"
import { NavLink } from 'react-router-dom';

const SignUp = () => {

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});

console.log(udata);

const adddata = (e) => {
  const { name, value } = e.target;
  // console.log(name,value);

  setUdata((pre) => {
      return {
          ...udata,
          [name]: value
      }
  })
};

  return (
    <>
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src='./blacklogoamazon.png' alt='amazonlogo' />
        </div>
        <div className='sign_form'>
          <form>
            <h1> Sign-Up</h1>
            <div className='from_data'>
              <label htmlFor="fname">Your Name</label>
              <input type='text' name='fname' 
                // onChange={(e)=>setUdata({...udata, fname:e.target.value})}
                onChange={adddata}
                value={udata.fname}
              id='fname'/>
            </div>
            <div className='from_data'>
              <label htmlFor="email">Email</label>
              <input type='text'name='email' placeholder='xyz@gmail.com' 
                onChange={adddata}
                value={udata.email}
              id='email'/>
            </div>
            <div className='from_data'>
              <label htmlFor="number">Mobile Number</label>
              <input type='number'name='mobile' placeholder='91+' 
                 onChange={adddata}
                 value={udata.mobile}
              id='mobile'/>
            </div>
            <div className='from_data'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' placeholder='At least 8 characters' 
                onChange={adddata}
                value={udata.password}
              id=''/>
            </div>
            <div className='from_data'>
              <label htmlFor="cpassword">Password Again</label>
              <input type='password'name='cpassword' 
                onChange={adddata}
                value={udata.cpassword}
              id='cpassword'/>
            </div>
            <button className='signin_btn'>Continue...</button>
            <Divider />

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">SignIn</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default SignUp