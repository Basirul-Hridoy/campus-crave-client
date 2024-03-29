import { useEffect, useState } from "react";
import mealsBannerImage from "../../../public/images/page-title-4.jpg"
import MealsCardDesign from "../../components/Meals/MealsCardDesign";
import { GetAllMealsData } from "../../lib/database/getMeals";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Meals = () => {
    const [mealsData, refetch, isLoading] = GetAllMealsData();

    const [pageNumber, setPageNumber] = useState(0)
    const itemPerPage = 8;

    const totalPages = Math.ceil(mealsData.length / itemPerPage);


    const getCurrentPageData = () => {
        const startIndex = pageNumber * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        return mealsData.slice(startIndex, endIndex);
    }

    useEffect(() => {
        refetch()
    }, [refetch]);

    const handlePageChange = (newPage) => {
        setPageNumber(newPage)
    }

    return (
        <div className="pb-20">
            <div style={{ backgroundImage: `url(${mealsBannerImage})` }} className='md:h-[500px] h-[200px] bg-cover bg-center'>
                <div className='h-full bg-cover bg-center flex  md:items-center items-end mb-24 justify-center relative bg-primary bg-opacity-40'></div>
            </div>

            {/*//*== Meal's Card ==*/}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 wrapper">
                {
                    getCurrentPageData().map(meal => (
                        <MealsCardDesign key={meal._id} meal={meal} />
                    ))
                }
            </div>


            {/*//* === Pagination ===*/}
            <div className="flex justify-end wrapper relative">
                <div className="absolute right-0 mt-5 flex justify-center items-center gap-3 bg-white p-2 shadow-lg rounded-md w-fit mx-auto select-none">
                    {/* Left arrow */}
                    <div onClick={() => handlePageChange(pageNumber - 1)} className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md ${pageNumber === 0 && 'opacity-50 pointer-events-none'}`}>
                        <IoIosArrowBack />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        {[...Array(totalPages).keys()].map((page) => (
                            <div onClick={() => handlePageChange(page)} className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${pageNumber === page ? 'bg-sky-500 text-white' : 'bg-white'} border-sky-300  font-semibold text-gray-700   py-[6px] rounded-md`} key={page}>
                                {page + 1}
                            </div>
                        ))}
                    </div>
                    {/* Right arrow */}
                    <div onClick={() => handlePageChange(pageNumber + 1)} className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md ${pageNumber === totalPages - 1 && 'opacity-50 pointer-events-none'}`}>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;