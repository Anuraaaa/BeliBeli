import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import logo from '/public/img/bliblilogo1.png'

export default function Register(props) {
    return (
        <>
        <Header/>
        <Navbar/>
        <div className='block absolute bg-blue-600 left-0 right-0'>
            <div className='container mx-auto p-16'>
                <div className='card w-1/2 lg:max-w-screen-lg sm:max-w-screen-sm bg-base-100 shadow-xl mx-auto'>
                    <div className='card-body'>
                        <form action='/register' method='post' className='form-control w-full'>
                            {props.errors.email && (
                                <div className="alert alert-error mb-8 py-0" id='btnclose'>
                                    {props.errors.email}
                                    <button className="btn btn-square btn-error" onClick={closebutton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            )}
                            {props.errors.username && (
                                <div className="alert alert-error mb-8 py-0" id='btnclose'>
                                    {props.errors.username}
                                    <button className="btn btn-square btn-error" onClick={closebutton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            )}
                            <img src={logo} alt="" className='mx-auto h-10'/>
                            <h1 className='flex justify-center'><b>Registration Form</b></h1>
                            <label className='label'>
                                <span className='label-text'><b>Name</b></span>
                            </label>
                            <input type="text" name='name' placeholder='Type name here' required className='input input-bordered w-full'/>
                            <label className='label'>
                                <span className='label-text'><b>Username</b></span>
                            </label>
                            <input type="text" name='username' placeholder='Type username here' required className='input input-bordered w-full'/>
                            <label className='label'>
                                <span className='label-text'><b>Email</b></span>
                            </label>
                            <input type="email" name='email' placeholder='Type email here' required className='input input-bordered w-full'/>
                            <label className='label'>
                                <span className='label-text'><b>Password</b></span>
                            </label>
                            <input type="password" name='password' placeholder='Type password here' required className='input input-bordered w-full'/>
                            <label className='label'>
                                <span className='label-text'><b>Re-Type Password</b></span>
                            </label>
                            <input type="password" name='repassword' placeholder='Type password again here' required className='input input-bordered w-full'/>
                            <button type='submit' className='btn btn-primary mt-8'>Submit</button>
                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('login')}
                                    className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Already registered? Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>            
        </>        
    )   
}