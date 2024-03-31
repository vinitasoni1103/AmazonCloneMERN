import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css"

const SignIn = () => {

  const [logdata, setData] = useState({
    email: "",
    password: ""
  });

  console.log(logdata);


  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value);

    setData((pre) => {
      return {
          ...pre,
          [name]: value
      }
    })
  }

  return (
    <>
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src='./blacklogoamazon.png' alt='amazonlogo' />
        </div>
        <div className='sign_form'>
          <form>
            <h1> Sign-In</h1>
            <div className='from_data'>
              <label htmlFor="email">Email</label>
              <input type='text'
              onChange={adddata}
              value={logdata.email}
              name='email' placeholder='xyz@gmail.com' id='email'/>
            </div>
            <div className='from_data'>
              <label htmlFor="password">Password</label>
              <input type='password' 
              onChange={adddata}
              value={logdata.password}
              name='password' placeholder='At least 8 characters' id=''/>
            </div>
            <button className='signin_btn'>Continue...</button>

            <div className="create_accountinfo">
                <p>New to Amazon?</p>
            <NavLink to="/register"> <button>Create your Amazon Account</button> </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default SignIn

