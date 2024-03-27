import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useAdmin from '../../Hook/useAdmin';

const DashboardDrower = ({ admiDashboardMenu, activeItem, handleItemClick, userSidebarMenu }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            {/*//* ====Dashboard menu ====*/}
            <div className="w-72 bg-[#182237] min-h-screen">

                <div className='flex items-center px-4 text-accent font-semibold text-xl gap-2 mt-12'>
                    <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                    <h4>{user?.displayName}</h4>
                </div>

                {/*//* ==== Admin sidebar menu ====*/}
                {isAdmin ? <ul className="flex flex-col md:gap-2 text-accent p-4">
                    {admiDashboardMenu.map((category, categoryIndex) => (
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
                </ul> :


                    <ul className="flex flex-col md:gap-2 text-accent p-4">
                        {userSidebarMenu.map((category, categoryIndex) => (
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
                    </ul>}


            </div>

            {/*//* Dashboard outlate*/}
            <div className="flex-1 bg-[#151C2C] text-accent md:p-10 p-2">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardDrower;