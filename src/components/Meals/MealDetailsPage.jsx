import { useLocation } from "react-router-dom";

const MealDetailsPage = () => {
    const location = useLocation();
    const mealData = location.state

    return (
        <div>
            {mealData.length}
        </div>
    );
};

export default MealDetailsPage;