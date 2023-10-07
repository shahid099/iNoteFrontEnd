import React, {useContext, useState} from 'react';
import noteContext from '../Context/noteContext';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const data = useContext(noteContext);
  const [ credentials, setCredentials ] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const hangleSubmit = async (e)=> {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/inote/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    
    const json = await response.json();
    console.log(json);
    if(json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    }
    else {
      alert('Invalid Input');
    }
  }

  const onChange = (e)=> {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

    return (
      <>
      <div className='signupBox'>
        <form className='SignUpForm' action="" onSubmit={hangleSubmit}>
          <div>
            <label htmlFor="email">Enter Your Email:</label>
            <input type="email" name='email' value={credentials.email} placeholder='example@gmail.com' onChange={onChange} />
          </div>
          <div>
            <label htmlFor="password">Enter Your Password:</label>
            <input type="password" name='password' value={credentials.password} placeholder='Password' onChange={onChange} />
          </div>
          <div className='buttonSubmit'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="mainFooter">
        {data.colorBox}
      </div>
    </>
  )
}

export default Login;
