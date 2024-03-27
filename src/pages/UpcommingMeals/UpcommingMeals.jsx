import MealsCardDesign from "../../components/Meals/MealsCardDesign";
import mealsBannerImage from "../../../public/images/page-title-3.jpg"
import { GetUpcommingMeals } from "../../lib/database/getMeals";

const UpcommingMeals = () => {
    const [mealsData] = GetUpcommingMeals()
    return (
        <div >
            <div style={{ backgroundImage: `url(${mealsBannerImage})` }} className='md:h-[500px] h-[200px] bg-cover bg-center'>
                <div className='h-full bg-cover bg-center flex  md:items-center items-end mb-24 justify-center relative bg-primary bg-opacity-40'></div>
            </div>

            {/*//*== Meal's Card ==*/}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 wrapper">
                {
                    mealsData.map(meal => (
                        <MealsCardDesign key={meal._id} meal={meal} />
                    ))
                }
            </div>
        </div>
    )
};

export default UpcommingMeals;