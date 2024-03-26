import DashboardDrower from "./DashboardDrower";
import { CgProfile } from "react-icons/cg";
import { FaFortAwesomeAlt, FaHome, FaStar, FaUsers } from "react-icons/fa";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { MdNoMeals } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {

    const [activeItem, setActiveItem] = useState('/dashboard/admin-profile');
    const location = useLocation();

    // Function to handle list item click
    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    const admiDashboardMenu = useMemo(() => [
        {
            title: "Pages",
            list: [
                { title: 'Admin Profile', path: '/dashboard', icon: <CgProfile /> },
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
    ], []);

    useEffect(() => {
        const currentPath = location.pathname;
        const activeItem = admiDashboardMenu.flatMap(category => category.list).find(item => item.path === currentPath);
        if (activeItem) {
            setActiveItem(activeItem.path);
        }
    }, [location, admiDashboardMenu]);

    return (
        <div>
            {/* <DashboardDrower adminMenu={adminMenu} userMenu={userMenu} /> */}
            <DashboardDrower
                admiDashboardMenu={admiDashboardMenu}
                activeItem={activeItem}
                handleItemClick={handleItemClick}
            />
        </div>
    );
};

export default Dashboard;