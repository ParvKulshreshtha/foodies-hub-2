// src/components/Login.js

import React, { useState } from 'react';
import { loginUser } from '../requests/Auth';
import { useNavigate } from 'react-router-dom';

function Login({setLocalAuth}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Handle form submission, e.g., send data to the server for authentication
    const {email, password} = formData
    const response = await loginUser({ email, password})

    console.log(response)

    if(!response || !response.data.success){
      alert("invalid creds")
    } else {
      console.log(response.data.token)
      setLocalAuth(response.data.token)
      navigate("/")
    }
    // Reset the form
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>my false is {false}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
