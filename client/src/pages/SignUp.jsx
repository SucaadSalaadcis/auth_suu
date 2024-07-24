import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    // we keep previos value of the data
    setFormData({ ...formData, [e.target.id]: e.target.value });  // {username: 'susu', email: 'salad', password: '123'}  
  }
  // console.log(formData);

  const hangleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      // console.log(data); message: user created successfully
      setLoading(false);
      if(data.success == false) {
        setError(true);
      }
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form onSubmit={hangleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} type="text" placeholder='UserName' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={handleChange} type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={handleChange} type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        {/* disable the btn when the loading is happning */}
        <button disabled={loading} className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>have an account?</p>
        <Link to={'sign-in'}>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>

      <p className='text-red-700 mt-5'>{error && 'Something Went Wrong!'}</p>

    </div>
  )
}
