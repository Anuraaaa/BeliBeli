import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import logo from '/public/img/bliblilogo1.png'

export default function Login(props) {
    return (
        <>
        <div>
            <Header/>
            <Navbar/>
            <div className='block absolute bg-blue-600 h-full left-0 right-0'>
                <div className='container mx-auto p-16'>
                    <div className='card w-1/2 lg:max-w-screen-lg sm:max-w-screen-sm bg-base-100 shadow-xl mx-auto'>
                        <div className='card-body'>
                            <form action='/login' method='post' className='form-control w-full'>
                                {props.error && (
                                    <div className="alert alert-error mb-8 py-0" id='btnclose'>
                                        {props.error}
                                        <button className="btn btn-square btn-error" onClick={closebutton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                )}
                                {props.success && (
                                    <div className="alert alert-success mb-8 py-0" id='btnclose'>
                                        {props.success}
                                        <button className="btn btn-square btn-success" onClick={closebutton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                )}
                                <img src={logo} alt="" className='mx-auto h-10'/>
                                <h1 className='flex justify-center'><b>Login Form</b></h1>
                                <label className='label'>
                                    <span className='label-text'><b>Email</b></span>
                                </label>
                                <input type="email" name='email' placeholder='Type email here' className='input input-bordered w-full' required/>
                                <label className='label'>
                                    <span className='label-text'><b>Password</b></span>
                                </label>
                                <input type="password" name='password' placeholder='Type password here' className='input input-bordered w-full' required/>
                                <button type='submit' className='btn btn-primary mt-8'>Submit</button>
                                <div className="flex items-center justify-end mt-4">
                                    <Link
                                        href={route('register')}
                                        className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Don't have account? Register
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        </>
    )
}