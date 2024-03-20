import { MdDinnerDining, MdFreeBreakfast, MdLunchDining } from "react-icons/md";
const BannerMealBox = ({ heading, description }) => {
    return (
        <div>
            <div className='flex items-center gap-8 p-8 bg-primary rounded-md hover:-translate-y-1 duration-300'>
                <div className='text-6xl text-secondary'>
                    {heading === "Breakfast Meal" && <MdFreeBreakfast />}
                    {heading === "Lunch Meal" && <MdLunchDining />}
                    {heading === "Dinner Meal" && <MdDinnerDining />}
                </div>
                <div className='text-white'>
                    <h2 className='text-2xl font-semibold'>{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerMealBox;