import DashboardDrower from "./DashboardDrower";
import { CgProfile } from "react-icons/cg";
import { FaFortAwesomeAlt, FaHome, FaStar, FaUsers } from "react-icons/fa";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { MdNoMeals } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosPublic } from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import useAdmin from "../../Hook/useAdmin";

const Dashboard = () => {
    const [isAdmin, adminLoading] = useAdmin();

    const [activeItem, setActiveItem] = useState(
        isAdmin === true ? '/dashboard/admin-profile' : "/dashboard/user-profile"
    );
    console.log(activeItem);
    const location = useLocation();

    // Function to handle list item click
    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    //* Admin Sidebar Menu
    const admiDashboardMenu = useMemo(() => [
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
    ], []);

    //* User Sidebar Menu
    const userSidebarMenu = useMemo(() => [
        {
            title: "Pages",
            list: [
                { title: 'User Profile', path: '/dashboard/user-profile', icon: <CgProfile /> },
                { title: 'Request Meal', path: '/dashboard/request-meal', icon: <FaUsers /> },
                { title: 'My Review', path: '/dashboard/my-review', icon: <GiHotMeal /> },
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

                userSidebarMenu={userSidebarMenu}
            />
        </div>
    );
};

export default Dashboard;