"use client"
import Image from 'next/image';
import signup from "../../../public/images/signup.jpg"
import visible from "../../../public/images/visible.png"
import React, { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-x-2'>
      <div className=' min-h-screen'>
        <Image src={signup} alt="home decor background for signup" width={500} height={800}/>
      </div>
      <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-lg font-bold">Sign Up</h2>
        <h3 className="mb-4 text-md " >Already have an account? <Link href="/login" className='text-green-500 font-semibold'>sign in</Link></h3>
        
        <div className="mb-4">
          <label className="block mb-1">Your Name:</label>
          <input
            type="name"
         
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Username:</label>
          <input
            type="user name"
         
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
         <div className='grid grid-flow-col-dense items-center'>
         <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2 "
            required
          />
           <Image src={visible} alt="visible password " width={20} height={20}/>
         </div>
        
        </div>
     
        <button type="submit" className="w-full bg-black text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default Signup;