"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import login from "../../../public/images/login.jpg";
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-x-2'>
      <div className='min-h-screen'>
        <Image src={login} alt="home decor background for signup" width={500} height={800} />
      </div>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
          <h2 className="mb-4 text-lg font-bold">Login</h2>
          <h3 className="mb-4 text-md">
            Don&apos;t have an account? <Link href="/signup" className='text-green-500 font-semibold'>sign up</Link>
          </h3>
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;