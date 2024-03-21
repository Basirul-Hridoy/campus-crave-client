
const EventsSection = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-8">Events and Activities</h2>

                {/* Event Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Individual Event Card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative overflow-hidden">
                            <img src="https://via.placeholder.com/800x600" alt="Event" className="w-full h-64 object-cover object-center" />
                            <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 font-semibold rounded-tr-lg">Upcoming</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Sports Tournament</h3>
                            <p className="text-gray-700 mb-4">Date: September 15-17, 2024</p>
                            <p className="text-gray-700 mb-4">Location: University Sports Complex</p>
                            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
