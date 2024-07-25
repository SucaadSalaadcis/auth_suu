import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user); // user is the name of the state
   console.log(loading, error);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // we keep previos value of the data
    setFormData({ ...formData, [e.target.id]: e.target.value });  // {username: 'susu', email: 'salad', password: '123'}  
  }
  // console.log(formData);

  const hangleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      // console.log(data); message: user created successfully
      if (data.success == false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');

    } catch (error) {
      dispatch(signInFailure(error));
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit={hangleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={handleChange} type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        {/* disable the btn when the loading is happning */}
        <button disabled={loading} className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading..." : "Sign In"}
        </button>
      <OAuth/>

      </form>

      <div className='flex gap-2 mt-5'>
        <p>Dont  Have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-500'>SignUp</span>
        </Link>
      </div>
      {/* hdu err jiro err.message ka hdi err.message jirin message keyga qado */}
      <p className='text-red-700 mt-5'>{error ? error.message || 'Something Went Wrong!' : ""}</p>

    </div>
  )
}
