import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import logo from '/public/img/mainblibli.png';
import cart from '/public/img/cart.png';

export default function Navbar({user}) {

    console.log('props navbar: ', user)

    if (user == "guest")
    {
        return (
            <>
            <div className="navbar bg-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold">
                    <li><Link href={route('home')}>Home</Link></li>
                    <li><a>About</a></li>
                </ul>
                </div>
                <img src={logo} alt="" className='h-8' />
                <a className="normal-case text-xl ml-2 font-bold">BeliBeli</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                <li><Link href={route('home')}>Home</Link></li>
                <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <img src={cart} alt="" className='h-8 mr-4'/>
                <Link href={route('login')} className="btn btn-ghost bg-blue-700 text-white normal-case mr-4 font-bold">Login</Link>
            </div>
            </div>
            </>
        )    
    }
    else if (user == "login")
    {
        return (
            <>
            <div className="navbar bg-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold">
                    <li><Link href={route('home')}>Home</Link></li>
                    <li><a>About</a></li>
                </ul>
                </div>
                <img src={logo} alt="" className='h-8' />
                <a className="normal-case text-xl ml-2 font-bold">BeliBeli</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                <li><Link href={route('home')}>Home</Link></li>
                <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><Link href={route('logout')}>Logout</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            </>
        )
    }
    else if (user == "admin")
    {
        return (
            <>
            <div className="navbar bg-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold">
                    <li><Link href={route('home')}>Home</Link></li>
                    <li><a>About</a></li>
                </ul>
                </div>
                <img src={logo} alt="" className='h-8' />
                <a className="normal-case text-xl ml-2 font-bold">BeliBeli</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                <li><Link href={route('home')}>Home</Link></li>
                <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><Link href={route('logout')}>Logout</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            </>
        )
    }
}