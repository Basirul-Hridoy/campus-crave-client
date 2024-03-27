import { useLocation } from "react-router-dom";

const MealDetailsPage = () => {
    const location = useLocation();
    const meal = location.state;
    console.log(meal);

    return (
        <div className="text-5xl min-h-screen bg-primary text-center text-white pt-40">
            {meal.title}
        </div>
    );
};

export default MealDetailsPage;