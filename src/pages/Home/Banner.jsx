import BannerMealBox from '../../components/BannerMealBox';
import bannerImg from "../../../public/images/home-top-1-1.jpg"

const Banner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='md:h-[800px] h-[400px] bg-cover  flex  items-center justify-center relative'>
                {/*//* ===== Banner section ======  */}
                <div className='space-y-6'>
                    <h1 className='md:text-5xl text-2xl text-center font-bold text-white flex flex-col gap-4'>
                        <span>ORGANIC FAST FOOD MADE</span>
                        <span> EASY AND HEALTHY</span>
                    </h1>
                    <div className='border border-gray-500 p-1 flex justify-between gap-1 lg:w-8/12 mx-auto'>
                        <input className="flex-1 border border-[#1B8EF8] px-4 py-3 text-[#1B8EF8] duration-300 focus:outline-none placeholder:text-gray-600" type="text" placeholder='Search' />
                        <button className='px-6 py-3 bg-secondary text-white'>Subscribe</button>
                    </div>
                </div>
                <div className='hidden md:flex flex-col md:flex-row gap-8 md:absolute bottom-10'>
                    <BannerMealBox heading={"Breakfast Meal"} description={"Today's your breakfast meal is dal vat"} />
                    <BannerMealBox heading={"Lunch Meal"} description={"Today's your breakfast meal is dim vat"} />
                    <BannerMealBox heading={"Dinner Meal"} description={"Today's your breakfast meal is mas vat"} />
                </div>

            </div>
            <div className='md:hidden flex flex-col md:flex-row gap-4 my-8 px-2 bg-slate-200'>
                <BannerMealBox heading={"Breakfast Meal"} description={"Today's your breakfast meal is dal vat"} />
                <BannerMealBox heading={"Lunch Meal"} description={"Today's your breakfast meal is dim vat"} />
                <BannerMealBox heading={"Dinner Meal"} description={"Today's your breakfast meal is mas vat"} />
            </div>
        </>
    );
};

export default Banner;