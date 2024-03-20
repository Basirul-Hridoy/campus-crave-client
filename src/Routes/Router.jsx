import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Meals from "../pages/Meals/Meals";
import MealDetailsPage from "../components/Meals/MealDetailsPage";

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
]);