import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import logo from '/public/img/mainblibli.png';
import bag from '/public/img/bag.png';

export default function Navbar({user, nama}) {

    console.log('props navbar: ', user)

    if (user == "tamu")
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
                <Link href={route('home')}><img src={logo} alt="" className='h-8' /></Link>
                <Link href={route('home')} className="normal-case text-xl ml-2 font-bold">BeliBeli</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                <li><Link href={route('home')}>Home</Link></li>
                <li><Link>About</Link></li>
                </ul>
                <Link><img src={bag} alt="" className='h-8 mr-4 hidden lg:block '/></Link>
            </div>
            <div className="navbar-end">
                <img src={bag} alt="" className='h-8 mr-4 lg:hidden'/>
                <Link href={route('login')} className="btn btn-ghost bg-blue-700 text-white normal-case mr-4 font-bold">Login</Link>
            </div>
            </div>
            </>
        )    
    }
    else if (user == "pembeli")
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
                    <li><Link>About</Link></li>
                </ul>
                </div>
                <Link href={route('home')}><img src={logo} alt="" className='h-8' /></Link>
                <Link href={route('home')} className="normal-case text-xl ml-2 font-bold">BeliBeli</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                <li><Link href={route('home')}>Home</Link></li>
                <li><Link>About</Link></li>
                </ul>
                <Link><img src={bag} alt="" className='h-8 mr-4 hidden lg:block '/></Link>
            </div>
            <div className="navbar-end">
                <img src={bag} alt="" className='h-8 mr-4 lg:hidden'/>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nama.length >= 16 ?
                        <>
                        <li>
                            <a className="justify-center text-xs">
                                {nama ? nama : ""}
                            </a>
                        </li>
                        <li><Link href={route('logout')} className='text-xs'>Logout</Link></li>
                        </>                         
                        :
                        <>
                        <li>
                            <a className="justify-center text-md">
                                {nama ? nama : ""}
                            </a>
                            <hr />
                            <li><Link href={route('logout')} className='text-md'>Logout</Link></li>
                        </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
            </div>
            </>
        )
    }
    else if (user == "penjual")
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
                <Link href={route('home')}><img src={logo} alt="" className='h-8' /></Link>
                <Link href={route('home')} className="normal-case text-xl ml-2 font-bold">BeliBeli</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                <li><Link href={route('home')}>Home</Link></li>
                <li><a>About</a></li>
                </ul>
                <Link><img src={bag} alt="" className='h-8 mr-4 hidden lg:block '/></Link>
            </div>
            <div className="navbar-end">
                <img src={bag} alt="" className='h-8 mr-4 lg:hidden'/>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nama.length >= 16 ?
                            <>
                            <li>
                                <a className="justify-center text-xs">
                                    {nama ? nama : ""}
                                </a>
                            </li>
                            <li><Link href={route('logout')} className='text-xs'>Logout</Link></li>
                            </>                         
                            :
                            <>
                            <li>
                                <a className="justify-center text-md">
                                    {nama ? nama : ""}
                                </a>
                                <hr />
                                <li><Link href={route('logout')} className='text-md'>Logout</Link></li>
                            </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            </div>
            </>
        )
    }
}