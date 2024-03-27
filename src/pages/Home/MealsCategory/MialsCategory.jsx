import { useState } from "react";
import MealsCardDesign from "../../../components/Meals/MealsCardDesign";
import { GetAllMealsData } from "../../../lib/database/getMeals";

const MialsCategory = () => {
    //* State to manage active tab
    const [activeTab, setActiveTab] = useState('all');



    //* Fetch meals data using react-query
    const [mealsData, refetch, isLoading] = GetAllMealsData();

    //* Filter meals based on active tab
    const filteredMeals = activeTab === 'all' ? mealsData : mealsData.filter(meal => meal.category === activeTab);
    return (
        <div className="bg-slate-100 pb-24 pt-14">
            {/*//*==Category Tab Button Start ==*/}
            <div className=" rounded-md py-1 md:w-[700px] mx-auto bg-white">
                <div className="md:w-[450px] md:mx-auto  flex justify-between md:justify-between px-4 mx-3 md:px-8 py-2 rounded-full border md:my-8 my-5 bg-primary text-white text-sm md:text-base">
                    <button className={`px-3 py-1 hover:bg-secondary rounded-full font-semibold duration-300 ${activeTab === 'all' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('all')}>
                        All Meals
                    </button>
                    <button className={`px-3 py-1 hover:bg-secondary rounded-full font-semibold duration-300 ${activeTab === 'Breakfast' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('Breakfast')}>
                        Breakfast
                    </button>
                    <button className={`px-3 py-1 hover:bg-secondary rounded-full font-semibold duration-300 ${activeTab === 'Lunch' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('Lunch')}>
                        Lunch
                    </button>
                    <button className={`px-3 py-1 hover:bg-secondary rounded-full font-semibold duration-300 ${activeTab === 'Dinner' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('Dinner')}>
                        Dinner
                    </button>
                </div>
            </div>
            {/*//*== Category Tab Button End ==*/}

            {/*//*== Meal's Card ==*/}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 wrapper">
                {
                    filteredMeals.slice(0, 8).map(meal => (
                        <MealsCardDesign key={meal._id} meal={meal} />
                    ))
                }
            </div>

        </div>
    );
};

export default MialsCategory;