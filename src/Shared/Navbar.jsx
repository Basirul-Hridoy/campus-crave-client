import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosCloseCircle, IoMdNotifications } from "react-icons/io";
import { StateContext } from '../provider/GlobalStatemanagment';
import LoginModal from '../components/LoginModal';
import { HiMenu } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";
import SignUpModal from '../components/SignUpModal';
import useAuth from '../Hook/useAuth';
import useAdmin from '../Hook/useAdmin';

const Navbar = () => {
    const { user, signout } = useAuth();
    const [isAdmin, adminLoading] = useAdmin();
    const { navUserModal, setNavUserModal, setShowLoginModalState, toggleNavbarMenu, setToggleNavbarMenu } = useContext(StateContext);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');

    const [showCloseIcon, setShowCloseIcon] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const visible = window.scrollY > 100;
            setIsNavbarVisible(visible);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    //* SEt timer to show the close icon in mobile version
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCloseIcon(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [showCloseIcon]);

    //* defind function to handle the  menu showing by clicking the icon with
    const handleIconClick = () => {
        setToggleNavbarMenu(false);
        setShowCloseIcon(false);
    };

    const handleToggleNavMenu = () => {
        setToggleNavbarMenu(true);
        setNavUserModal(false)
    }
    const handleNavUserModal = () => {
        setToggleNavbarMenu(false);
        setNavUserModal(true)
    }

    return (
        <>
            <nav className={` py-5 px-3 md:px-0 text-white fixed z-50 w-full ${isNavbarVisible ? "bg-primary duration-500 " : "bg-transparent duration-500"}`}>
                <div className={`wrapper flex items-center justify-between ${!user && "flex-row-reverse md:flex-row"}`}>

                    {/*//* ============= Desktop ===========*/}

                    {/*//* ==== Logo field ====*/}
                    <Link to="/" className="cursor-pointer hidden md:block transition-all duration-300 hover:scale-105">
                        {/* <h2><img src="../public/images/navbar-logo-removebg (2).png" className='w-40' alt="" /></h2> */}
                        <h2 className='md:text-4xl text-3xl text-orange-400 font-bold flex items-center gap-1 md:gap-2'><img src="../public/images/main-logo.png" className='md:w-12 w-10' alt="" /> <span className='hidden md:block'>Campus</span> <span className='md:text-red-500 text-secondary'>Crave</span></h2>
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

                    {/*//* ======================== Mobile version =====================*/}
                    <div className='md:hidden cursor-pointer z-50'>
                        <HiMenu onClick={handleToggleNavMenu} className={`text-4xl ${toggleNavbarMenu && !user && "hidden"}`} />

                        <div>

                            <ul className={`absolute left-0 top-0 pl-4 pt-16 w-full duration-1000 min-h-screen bg-primary text-white ${toggleNavbarMenu ? "-translate-x-0" : "-translate-x-96"}`}>

                                {/*//* Close icon*/}
                                {showCloseIcon && <IoIosCloseCircle
                                    onClick={handleIconClick}
                                    className={`z-50 text-4xl absolute top-5 right-5 ${!toggleNavbarMenu && "hidden"}`}
                                />}

                                <ul onClick={() => setToggleNavbarMenu(false)} className="flex flex-col gap-3 uppercase font-semibold font-sans">
                                    <NavLink to={"/"}>
                                        <li className="cursor-pointer">Home</li>
                                    </NavLink>

                                    <NavLink to={"/meals"}>
                                        <li className="cursor-pointer">Meals</li>
                                    </NavLink>

                                    <NavLink to={"/upcomming-meals"}>
                                        <li className="cursor-pointer">Upcoming Meals</li>
                                    </NavLink>

                                    {!user && <button className='w-[115px] cursor-pointer border border-gray-600 rounded-2xl py-2 px-3 hover:bg-secondary hover:duration-300' onClick={() => setShowLoginModalState(true)}>
                                        <li className=" flex gap-2 ">
                                            Join US <span className='text-2xl'><AiOutlineLogin /></span>
                                        </li>
                                    </button>}

                                </ul>
                            </ul>
                        </div>
                    </div>

                    {/*//* Mobile version logo field */}
                    <Link to="/" className="md:hidden cursor-pointer transition-all duration-300 hover:scale-105">
                        {/* <h2><img src="../public/images/navbar-logo-removebg (2).png" className='w-40' alt="" /></h2> */}
                        <h2 className='md:text-4xl text-2xl text-orange-400 font-bold flex items-center gap-1 md:gap-2'><img src="../public/images/main-logo.png" className='md:w-12 w-10 hidden ' alt="" /> <span className=''>Campus</span> <span className='text-red-500'>Crave</span></h2>
                    </Link>

                    {/*//* ======= User image feild (If user is Exist) =======*/}
                    {user && <div className='flex gap-3 items-center'>
                        {/* <img src="../public/main-logo.png" className='w-12 h-12 rounded-full' alt="" /> */}
                        <div>
                            <IoMdNotifications className='md:text-3xl text-2xl cursor-pointer' />
                        </div>

                        <div className="relative mx-auto w-fit text-black">
                            <button onClick={() => {
                                handleNavUserModal
                                setNavUserModal(pre => !pre)
                            }}>
                                <img className='md:w-12 md:h-12 w-10 h-10 rounded-full' src={user?.photoURL} />
                            </button>
                            <ul className={`${navUserModal ? 'scale-y-100' : ' scale-y-0 '} origin-top absolute right-0 top-[72px] z-50 rounded-sm bg-slate-200 shadow-md duration-500`}>
                                <p className={`rounded-sm w-60 px-4 py-2 font-semibold cursor-none`}>
                                    {user?.displayName}
                                </p>
                                <li onClick={() => {
                                    navigate(`${isAdmin ? "/dashboard/admin-profile" : "/dashboard/user-profile"}`)
                                    setNavUserModal(false)
                                }}
                                    className={`cursor-pointer rounded-sm px-4 py-2 hover:bg-primary hover:text-white hover:duration-300`}>
                                    Dashboard
                                </li>
                                <li onClick={signout}
                                    className={`cursor-pointer rounded-sm w-60 px-4 py-2 hover:bg-primary hover:text-white hover:duration-300 `}>
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