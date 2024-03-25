import DashboardDrower from "./DashboardDrower";
import { CgProfile } from "react-icons/cg";
import { FaFortAwesomeAlt, FaHome, FaStar, FaUsers } from "react-icons/fa";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { MdNoMeals } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {

    const [activeItem, setActiveItem] = useState(null);


    const location = useLocation();

    useEffect(() => {
        // Define a function to determine the active item based on the current path
        const determineActiveItem = () => {
            // Example logic to determine the active item
            // This should be adjusted based on your actual route paths
            if (location.pathname.includes('/dashboard/manage-users')) {
                return '/dashboard/manage-users';
            } else if (location.pathname.includes('/dashboard/another-page')) {
                return '/dashboard/another-page';
            }
        };

        // Set the initial active item based on the current route
        setActiveItem(determineActiveItem());
    }, [location]);

    // Function to handle list item click
    const handleItemClick = (path) => {
        setActiveItem(path);
    };


    const admiDashboardMenu = [
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
            title: "Home",
            list: [
                { title: "Home", path: "/", icon: <FaHome /> }
            ]
        }
    ];


    return (
        <div>
            {/* <DashboardDrower adminMenu={adminMenu} userMenu={userMenu} /> */}
            <DashboardDrower admiDashboardMenu={admiDashboardMenu} activeItem={activeItem} handleItemClick={handleItemClick} />
        </div>
    );
};

export default Dashboard;