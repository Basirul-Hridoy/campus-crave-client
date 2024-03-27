import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useAdmin from '../../Hook/useAdmin';
import { StateContext } from '../../provider/GlobalStatemanagment';
import { useContext } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

const DashboardDrower = ({ admiDashboardMenu, activeItem, handleItemClick, userSidebarMenu }) => {
    const { showDashboardSidebar, setShowDashboardSidebar } = useContext(StateContext);
    console.log(showDashboardSidebar);
    const navigate = useNavigate();
    const { user } = useAuth();
    const [isAdmin] = useAdmin();


    const sidebarMenuData = isAdmin ? admiDashboardMenu : userSidebarMenu;

    return (
        <div className="flex">
            {/*//* ========================Desktop Dashboard menu ============================*/}
            <div className="md:block hidden w-72 bg-[#182237] min-h-screen">

                {/*//* --- user profile image and name ----*/}
                <div className='flex items-center px-4 text-accent font-semibold text-xl gap-2 mt-12'>
                    <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                    <h4>{user?.displayName}</h4>
                </div>

                {/*//* ==== Conditional user and admin sidebar menu ====*/}
                <ul className="flex flex-col md:gap-2 text-accent p-4">
                    {sidebarMenuData.map((category, categoryIndex) => (
                        <div className={`mb-2 `} key={categoryIndex}>
                            <li className="text-accent font-bold text-xl">{category.title}</li>
                            {category.list.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        handleItemClick(item.path); // Update the active item state
                                        navigate(item.path); // Navigate to the corresponding content
                                    }}
                                    className={`cursor-pointer flex items-center gap-3 rounded-md my-1 font-semibold duration-100 p-3 hover:bg-[#2E374A] ${activeItem === item.path ? ' bg-[#2E374A] p-3' : ''}`}
                                >
                                    {item.icon}{item.title}
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </div>

            {/*//* ======= Dashboard sidebar icon to use open and close dashboard sidebar =======*/}
            <div onClick={() => setShowDashboardSidebar(pre => !pre)} className='z-[100] absolute top-5 right-5 text-accent text-3xl cursor-pointer md:hidden '>
                <IoIosCloseCircle />
            </div>

            {/*//* ================================ Mobile version ===================================*/}
            <div className={`z-50 origin-left block md:hidden w-full bg-dashboard-primary min-h-screen absolute duration-700 ${showDashboardSidebar ? 'scale-x-0' : 'scale-x-100 w-full'}`}>

                {/*//* ==== Confitional user and admin sidebar menu ====*/}
                <ul className="flex flex-col md:gap-2 text-accent p-4 mt-16">
                    {sidebarMenuData.map((category, categoryIndex) => (
                        <div className={`mb-2 `} key={categoryIndex}>
                            <li className="text-accent font-bold text-xl">{category.title}</li>
                            {category.list.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        handleItemClick(item.path); // Update the active item state
                                        navigate(item.path); // Navigate to the corresponding content
                                    }}
                                    className={`cursor-pointer flex items-center gap-3 rounded-md my-1 font-semibold duration-100 p-3 hover:bg-[#2E374A] ${activeItem === item.path ? ' bg-[#2E374A] p-3' : ''}`}
                                >
                                    {item.icon}{item.title}
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </div>

            {/*//* Dashboard outlate*/}
            <div className="flex-1 bg-[#151C2C] text-accent md:p-10 p-2 min-h-screen pt-16 md:pt-0">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardDrower;