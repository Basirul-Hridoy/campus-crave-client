import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Meals from "../pages/Meals/Meals";
import MealDetailsPage from "../components/Meals/MealDetailsPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddMeal from "../pages/Dashboard/AdminDashboard/AddMeal/AddMeal";
import AdminProfile from "../pages/Dashboard/AdminDashboard/AdminProfile/AdminProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/meals",
                element: <Meals />
            },
            {
                path: "/meal-details/:id",
                element: <MealDetailsPage />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <AdminProfile />
            },
            {
                path: "manage-users",
                element: <ManageUsers />
            },
            {
                path: "add-meal",
                element: <AddMeal />
            },
        ]
    }
]);