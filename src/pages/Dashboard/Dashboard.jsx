import { NavLink } from "react-router-dom";
import DashboardDrower from "./DashboardDrower";
import { CgProfile } from "react-icons/cg";
import { FaFortAwesomeAlt, FaHome, FaStar, FaUsers } from "react-icons/fa";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { MdNoMeals, MdOutlineSettings } from "react-icons/md";
import { useState } from "react";

const Dashboard = () => {

    const [activeItem, setActiveItem] = useState(null);

    // Function to handle list item click
    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    // Define your menu items
    // const userMenu = [
    //     { title: 'Admin Profile', path: '/dashboard/admin-profile', icon: <CgProfile /> },
    //     { title: 'Manage Users', path: '/dashboard/manage-users', icon: <FaUsers /> },
    //     { title: 'Add Meal', path: '/dashboard/add-meal', icon: <GiHotMeal /> },
    //     { title: 'All Meals', path: '/dashboard/all-meals', icon: <MdNoMeals /> },
    //     { title: 'All Reviews', path: '/dashboard/all-reviews', icon: <FaStar /> },
    //     { title: 'Serve Meals', path: '/dashboard/serve-meals', icon: <GiMeal /> },
    //     { title: 'Upcoming Meals', path: '/dashboard/upcoming-meals', icon: <FaFortAwesomeAlt /> }
    // ];

    const userMenuItems = [
        {
            title: "Pages",
            list: [
                { title: 'Admin Profile', path: '/dashboard/admin-profile', icon: <CgProfile /> },
                { title: 'Manage Users', path: '/dashboard/manage-users', icon: <FaUsers /> },
                { title: 'Add Meal', path: '/dashboard/add-meal', icon: <GiHotMeal /> },
                { title: 'All Meals', path: '/dashboard/all-meals', icon: <MdNoMeals /> },
                { title: 'All Reviews', path: '/dashboard/all-reviews', icon: <FaStar /> },
                { title: 'Serve Meals', path: '/dashboard/serve-meals', icon: <GiMeal /> },
                { title: 'Upcoming Meals', path: '/dashboard/upcoming-meals', icon: <FaFortAwesomeAlt /> }
            ]
        },
        {
            title: "User",
            list: [
                { title: "Home", path: "/", icon: <FaHome /> }
            ]
        }
    ];


    // const adminMenu = <>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/admin-profile"><CgProfile />Admin Profile</NavLink></li>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/manage-users"><FaUsers />Manage Users</NavLink></li>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/add-meal"><GiHotMeal />Add Meal</NavLink></li>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/all-meals"><MdNoMeals />All Meals</NavLink></li>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/all-reviews"><FaStar />All Reviews</NavLink></li>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/serve-meals"><GiMeal />Searve Meals</NavLink></li>
    //     <li className="w-full py-2 hover:bg-[#2E374A] duration-100 px-2 rounded-md"><NavLink className="flex gap-3 items-center" to="/dashboard/upcomming-meals"><FaFortAwesomeAlt />Upcomming Meals</NavLink></li>
    // </>

    // const userMenu = <>
    //     <li><NavLink to="/admin-profile">Admin Profile</NavLink></li>
    //     <li><NavLink to="/manage-users">Manage Users</NavLink></li>
    //     <li><NavLink to="/add-meal">Add Meal</NavLink></li>
    //     <li><NavLink to="/all-meals">All Meals</NavLink></li>
    //     <li><NavLink to="/all-reviews">All Reviews</NavLink></li>
    //     <li><NavLink to="/serve-meals">Searve Meals</NavLink></li>
    //     <li><NavLink to="/upcomming-meals">Upcomming Meals</NavLink></li>
    // </>

    return (
        <div>
            {/* <DashboardDrower adminMenu={adminMenu} userMenu={userMenu} /> */}
            <DashboardDrower userMenuItems={userMenuItems} activeItem={activeItem} handleItemClick={handleItemClick} />
        </div>
    );
};

export default Dashboard;