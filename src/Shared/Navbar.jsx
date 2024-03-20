import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { StateContext } from '../provider/GlobalStatemanagment';
import LoginModal from '../components/LoginModal';

const Navbar = () => {
    const user = !true;
    const { navUserModal, setNavUserModal, showLoginModalState, setShowLoginModalState } = useContext(StateContext);

    return (
        <>
            <nav className=" bg-primary py-5 px-3 md:px-0 text-white">
                <div className='wrapper flex items-center justify-between'>
                    {/*//* ============= Desktop ===========*/}

                    {/*//* ==== Logo field ====*/}
                    <div className="cursor-pointer  transition-all duration-300 hover:scale-105">
                        {/* <h2><img src="../public/images/navbar-logo-removebg (2).png" className='w-40' alt="" /></h2> */}
                        <h2 className='md:text-4xl text-3xl text-orange-400 font-bold flex items-center gap-1 md:gap-2'><img src="../public/main-logo.png" className='md:w-12 w-10' alt="" /> Campus <span className='text-red-500'>Crave</span></h2>
                    </div>

                    {/*//* ==== MenuBar ====*/}
                    <ul className="hidden items-center justify-between gap-10 md:flex uppercase font-semibold font-sans">
                        <NavLink to={"/"}>
                            <li className="group flex  cursor-pointer flex-col">
                                Home<span className="navItmeBorder"></span>
                            </li>
                        </NavLink>
                        <NavLink to={"/meals"}>
                            <li className="group flex  cursor-pointer flex-col">
                                Meals<span className="navItmeBorder"></span>
                            </li>
                        </NavLink>
                        <NavLink to={"/upcomming-meals"}>
                            <li className="group flex  cursor-pointer flex-col">
                                Upcoming Meals
                                <span className="navItmeBorder"></span>
                            </li>
                        </NavLink>
                        {!user && <button onClick={() => setShowLoginModalState(true)}>
                            <li className=" flex gap-2 cursor-pointer border border-gray-600 rounded-2xl py-2 px-3 hover:bg-secondary hover:duration-300">
                                Join US <span className='text-2xl'><AiOutlineLogin /></span>
                            </li>
                        </button>}

                    </ul>


                    {/*//* ============= Mobile ===========*/}
                    {/* <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">

                            Home
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Services
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            About
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Contact
                        </li>
                    </ul>
                )}
            </div> */}



                    {user && <div className='flex gap-3 items-center'>
                        {/* <img src="../public/main-logo.png" className='w-12 h-12 rounded-full' alt="" /> */}
                        <div>
                            <IoMdNotifications className='text-3xl cursor-pointer' />
                        </div>
                        <div className="relative mx-auto w-fit text-black">
                            <button onClick={() => setNavUserModal((prev) => !prev)}>
                                <img width={40} height={40} src='../../public/main-logo.png' />
                            </button>
                            <ul className={`${navUserModal ? 'visible duration-300' : 'invisible'} absolute right-0 top-[67px] z-50 rounded-sm bg-slate-200 shadow-md`}>
                                <p className={`rounded-sm w-60 px-4 py-2 font-semibold`}>
                                    Hridoy Ahme (user)
                                </p>
                                <li className={`rounded-sm w-60 px-4 py-2 hover:bg-primary hover:text-white hover:duration-300`}>
                                    Dashboard
                                </li>
                                <li className={`rounded-sm w-60 px-4 py-2 hover:bg-primary hover:text-white hover:duration-300 `}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </nav>
            <LoginModal />
        </>
    );
};

export default Navbar;