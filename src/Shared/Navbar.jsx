import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { StateContext } from '../provider/GlobalStatemanagment';
import LoginModal from '../components/LoginModal';
import { HiMenu } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";
import SignUpModal from '../components/SignUpModal';
import useAuth from '../Hook/useAuth';

const Navbar = () => {
    const { user, signout } = useAuth();
    const { navUserModal, setNavUserModal, setShowLoginModalState, toggleNavbarMenu, setToggleNavbarMenu } = useContext(StateContext);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');


    useEffect(() => {
        const handleScroll = () => {
            const visible = window.scrollY > 100;
            setIsNavbarVisible(visible);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);


    return (
        <>
            <nav className={` py-5 px-3 md:px-0 text-white fixed z-50 w-full ${isNavbarVisible ? "bg-primary duration-500 " : "bg-transparent duration-500"}`}>
                <div className='wrapper flex items-center justify-between'>

                    {/*//* ============= Desktop ===========*/}

                    {/*//* ==== Logo field ====*/}
                    <Link to="/" className="cursor-pointer  transition-all duration-300 hover:scale-105">
                        {/* <h2><img src="../public/images/navbar-logo-removebg (2).png" className='w-40' alt="" /></h2> */}
                        <h2 className='md:text-4xl text-3xl text-orange-400 font-bold flex items-center gap-1 md:gap-2'><img src="../public/images/main-logo.png" className='md:w-12 w-10' alt="" /> Campus <span className='text-red-500'>Crave</span></h2>
                    </Link>

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

                    {/*//* ============= Mobile version ===========*/}
                    <div className='md:hidden '>
                        {!toggleNavbarMenu ? <HiMenu onClick={() => setToggleNavbarMenu(pre => !pre)} className='text-4xl' /> :
                            <RiCloseCircleLine onClick={() => setToggleNavbarMenu(pre => !pre)} className='text-4xl' />}

                        <div>
                            <ul className={`absolute left-0 top-0 p-8 w-5/6 duration-1000 min-h-screen bg-primary text-white ${toggleNavbarMenu ? "-translate-x-0" : "-translate-x-96"}`}>
                                <ul onClick={() => setToggleNavbarMenu(false)} className=" items-center justify-between gap-10 md:flex uppercase font-semibold font-sans">
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
                            </ul>
                        </div>
                    </div>


                    {/*//* === User image feild ====*/}
                    {user && <div className='flex gap-3 items-center'>
                        {/* <img src="../public/main-logo.png" className='w-12 h-12 rounded-full' alt="" /> */}
                        <div>
                            <IoMdNotifications className='text-3xl cursor-pointer' />
                        </div>
                        <div className="relative mx-auto w-fit text-black">
                            <button onClick={() => setNavUserModal((prev) => !prev)}>
                                <img className='w-12 h-12 rounded-full' src={user?.photoURL} />
                            </button>
                            <ul className={`${navUserModal ? 'visible duration-300' : 'invisible'} absolute right-0 top-[67px] z-50 rounded-sm bg-slate-200 shadow-md`}>
                                <p className={`rounded-sm w-60 px-4 py-2 font-semibold cursor-none`}>
                                    {user?.displayName}
                                </p>
                                <li onClick={() => navigate("/dashboard")} className={`cursor-pointer rounded-sm px-4 py-2 hover:bg-primary hover:text-white hover:duration-300`}>
                                    Dashboard
                                </li>
                                <li onClick={signout} className={`cursor-pointer rounded-sm w-60 px-4 py-2 hover:bg-primary hover:text-white hover:duration-300 `}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </nav>

            {/*//* === Login Modal ====*/}
            <LoginModal />
            <SignUpModal />
        </>
    );
};

export default Navbar;