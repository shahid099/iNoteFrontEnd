import React, { useContext, useState } from 'react'
import noteContext from '../Context/noteContext';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const data = useContext(noteContext);
  const [input, setInput] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate1 = useNavigate();
  
  const hangleSubmit = async (e)=> {
    e.preventDefault();

    const { name, email, password } = input;
    const response = await fetch('http://localhost:5000/inote/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    
    const json = await response.json();
    console.log(json);
    if(json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate1('/');
    }
    else {
      alert('Invalid Input');
    }
  }

  const onChange = (e)=> {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className='signupBox'>
        <form className='SignUpForm' action="" onSubmit={hangleSubmit}>
          <div>
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" name='name'  placeholder='John Duo' id='name' onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email">Enter Your Email:</label>
            <input type="email" name='email' placeholder='example@gmail.com' id='email' onChange={onChange} />
          </div>
          <div>
            <label htmlFor="password">Enter Your Password:</label>
            <input type="password" name='password' placeholder='Password' id='password' onChange={onChange} />
          </div>
          <div>
            <label htmlFor="cpassword">Conform Your Password:</label>
            <input type="password" name='cpassword' placeholder='Comform Password' id='cpassword' onChange={onChange} />
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

export default Signup;
