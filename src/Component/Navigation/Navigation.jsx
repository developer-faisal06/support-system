import React from 'react';

const Navigation = () => {
    return (
        <div className='bg-sky-100'>
            <div className="navbar container mx-auto shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                             <li><a className='text-black'>Home</a></li>
                            <li><a className='text-black'>FAQ</a></li>
                            <li><a className='text-black'>Blog</a></li>
                            <li><a className='text-black'>Download</a></li>
                            <li><a className='text-black'>Contact</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn-ghost text-xl text-black font-bold">CS Ticket System</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-2">
                            <li ><a href='#'  className='  text-black font-bold focus:bg-blue-200'>Home</a></li>
                            <li><a href='#' className='text-black font-bold focus:bg-blue-200'>FAQ</a></li>
                            <li><a href='#' className='text-black font-bold focus:bg-blue-200'>Blog</a></li>
                            <li><a href='#' className='text-black font-bold focus:bg-blue-200'>Download</a></li>
                            <li><a href='#' className='text-black font-bold focus:bg-blue-200'>Contact</a></li>
                        </ul>
                    </div>
                    <button class=" btn border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 text-white rounded px-4 shadow-lg transition-all duration-300">
                        <span class="font-bold">+</span>
                        <span class="text-md ">New Ticket</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;