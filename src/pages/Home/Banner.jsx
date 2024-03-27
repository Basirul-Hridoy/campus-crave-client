import BannerMealBox from '../../components/BannerMealBox';
import bannerImg from "../../../public/images/2.jpg"

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
            <div className='md:min-h-screen h-[420px] bg-cover bg-center flex  md:items-center items-end pb-14 md:pb-0 md:mb-24 justify-center relative bg-primary bg-opacity-40'>

                {/*//* ===== Banner section ======  */}
                <div className='md:space-y-10 space-y-5'>
                    <h1 className='md:text-6xl text-2xl text-center font-bold text-white flex flex-col md:gap-4 gap-2'>
                        <p className=' text-white text-center md:text-2xl text-xl font-semibold'>
                            <span className='text-secondary'>Campus Crave</span> the Best opportunity!
                        </p>
                        <span>ORGANIC FAST FOOD MADE</span>
                        <span className='text-secondary'> EASY AND HEALTHY</span>
                    </h1>

                    {/*//* === Search input ====*/}
                    <div className='border border-gray-500 p-1 flex justify-between gap-1 md:w-8/12 w-ful mx-auto'>
                        <input className="flex-1 border border-[#1B8EF8] md:px-4 px-2 py-3 text-[#1B8EF8] duration-300 focus:outline-none placeholder:text-gray-600" type="text" placeholder='Search' />
                        <button className='md:px-6 px-2 py-3 bg-secondary text-white text-sm'>Subscribe</button>
                    </div>
                </div>

                <div className='hidden md:flex flex-col md:flex-row gap-8 md:absolute bottom-10'>
                    <BannerMealBox heading={"Breakfast"} description={"Today's your breakfast meal is dal vat"} />
                    <BannerMealBox heading={"Lunch"} description={"Today's your breakfast meal is dim vat"} />
                    <BannerMealBox heading={"Dinner"} description={"Today's your breakfast meal is mas vat"} />
                </div>

            </div>

            <div className='hidden flex flex-col md:flex-row gap-4 px-2 bg-slate-200 '>
                <BannerMealBox heading={"Breakfast"} description={"Today's your breakfast meal is dal vat"} />
                <BannerMealBox heading={"Lunch"} description={"Today's your breakfast meal is dim vat"} />
                <BannerMealBox heading={"Dinner"} description={"Today's your breakfast meal is mas vat"} />
            </div>
        </div>
    );
};

export default Banner;