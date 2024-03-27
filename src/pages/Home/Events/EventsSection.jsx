import eventImg_1 from "../../../../public/images/events/MacandCheese-2022_40.jpg"
import eventImg_2 from "../../../../public/images/events/download.jpeg"
import eventImg_3 from "../../../../public/images/events/20170527_COMM_GradSunday01.jpg"
const EventsSection = () => {
    return (
        <section className="md:py-12 py-2 bg-gray-100">
            <div className="wrapper mx-auto px-4">
                {/* Section Title and Short Description */}
                <div className="my-12 text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-2">Events and Activities</h2>
                    <p className="text-primary md:text-xl md:w-1/2 mx-auto">Stay updated with our upcoming events and exciting activities organized for the university community.</p>
                </div>

                {/* Event Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Individual Event Card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative overflow-hidden">
                            <span className="px-3 py-1 rounded-xl bg-blue-500 text-white absolute top-3 right-3 z-20 text-sm font-semibold">25 May</span>
                            <img src={eventImg_3} alt="Event" className="w-full h-64 object-cover object-center hover:scale-110 transition-all duration-1000" />
                            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 font-semibold rounded-tr-lg">Upcoming</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Sports Tournament</h3>
                            <p className="text-gray-700 mb-4">Date: September 15-17, 2024</p>
                            <p className="text-gray-700 mb-4">Location: University Sports Complex</p>
                            <div className="flex justify-between">
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Perticipate</button>
                                <button className="text-blue-500 font-semibold hover:underline">Details...</button>
                            </div>
                        </div>
                    </div>

                    {/* Individual Event Card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative overflow-hidden">
                            <img src={eventImg_1} alt="Event" className="w-full h-64 object-cover object-center hover:scale-110 transition-all duration-1000" />
                            <span className="px-3 py-1 rounded-xl bg-blue-500 text-white absolute top-3 right-3 z-20 text-sm font-semibold">25 May</span>
                            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 font-semibold rounded-tr-lg">Upcoming</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Sports Tournament</h3>
                            <p className="text-gray-700 mb-4">Date: September 15-17, 2024</p>
                            <p className="text-gray-700 mb-4">Location: University Sports Complex</p>
                            <div className="flex justify-between">
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Perticipate</button>
                                <button className="text-blue-500 font-semibold hover:underline">Details...</button>
                            </div>
                        </div>
                    </div>

                    {/* Individual Event Card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative overflow-hidden">
                            <img src={eventImg_2} alt="Event" className="w-full h-64 object-cover object-center hover:scale-110 transition-all duration-1000" />
                            <span className="px-3 py-1 rounded-xl bg-blue-500 text-white absolute top-3 right-3 z-20 text-sm font-semibold">25 May</span>
                            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 font-semibold rounded-tr-lg">Upcoming</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Sports Tournament</h3>
                            <p className="text-gray-700 mb-4">Date: September 15-17, 2024</p>
                            <p className="text-gray-700 mb-4">Location: University Sports Complex</p>
                            <div className="flex justify-between">
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Perticipate</button>
                                <button className="text-blue-500 font-semibold hover:underline">Details...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
