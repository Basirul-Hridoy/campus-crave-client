import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
const MealsCategoryTab = () => {

    //* State to manage active tab
    const [activeTab, setActiveTab] = useState('all');

    const navigate = useNavigate();


    //* Fetch meals data using react-query
    const { data: melasData = [] } = useQuery({
        queryKey: ["meals"],
        queryFn: async () => {
            const res = await fetch("meals.json");
            return res.json()
        }

    })

    //* Filter meals based on active tab
    const filteredMeals = activeTab === 'all' ? melasData : melasData.filter(meal => meal.category === activeTab);

    return (
        <div className="bg-slate-100 pb-24">

            {/*//*== Tab Button Start ==*/}
            <div className=" py-3 md:w-[450px] mx-auto ">
                <div className="flex justify-between md:justify-between px-4 md:px-8 py-2 rounded-full border my-8 bg-primary text-white">
                    <button className={` font-semibold ${activeTab === 'all' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('all')}>
                        All Meals
                    </button>
                    <button className={` font-semibold ${activeTab === 'breakfast' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('breakfast')}>
                        Breakfast
                    </button>
                    <button className={` font-semibold ${activeTab === 'lunch' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('lunch')}>
                        Lunch
                    </button>
                    <button className={`px-3 font-semibold ${activeTab === 'dinner' ? 'px-3 py-1 bg-secondary rounded-full whitespace-nowrap' : ''}`} onClick={() => setActiveTab('dinner')}>
                        Dinner
                    </button>
                </div>
            </div>
            {/*//*== Tab Button End ==*/}

            {/*//* ===== Display meals =======*/}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 wrapper">
                {filteredMeals.map(meal => (
                    <div key={meal.id} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl mx-auto bg-white">
                        <div className="flex justify-center w-full h-48 md:h-[280px] relative">
                            <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                                <div className="flex items-center text-white text-3xl ">
                                    <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
                                </div>
                                <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">৳ {meal.price}</button>
                            </div>
                            <img className="rounded-lg bg-black/40 w-full h-full" src="https://source.unsplash.com/300x300/?macbook" alt="card navigate ui" />
                        </div>
                        <div className="space-y-3 mt-3">
                            <div className=" w-[85%] font-semibold ">
                                <h6 className="text-sm md:text-base lg:text-lg">Waterproof Sport HD Monitor for MacBook</h6>
                            </div>
                            <div className=" text-sm md:text-base flex justify-between items-center">
                                <button
                                    onClick={() => navigate(`/meal-details/${meal.id}`, { state: melasData })}
                                    className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Details</button>

                                <p className=" px-3 py-2 rounded-lg font-semibold border border-gray-200 flex items-center">
                                    <FaStar className="text-orange-400 text-xl" />{meal.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MealsCategoryTab;