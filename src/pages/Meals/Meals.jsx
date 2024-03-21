
const Meals = () => {
    return (
        <div className="space-y-14">
            <section className="py-12 bg-gray-100">
                <div className="wrapper mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">News and Announcements</h2>

                    {/* Featured News */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Featured News Card */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/800x400" alt="Featured News" className="w-full h-48 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Featured News Title</h3>
                                <p className="text-gray-700 mb-4">Brief summary of the featured news article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>

                        {/* Secondary Featured News Card */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/800x400" alt="Featured News" className="w-full h-48 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Secondary Featured News Title</h3>
                                <p className="text-gray-700 mb-4">Brief summary of the secondary featured news article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* News Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        {/* Individual News Cards */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/600x400" alt="News" className="w-full h-40 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">News Title</h3>
                                <p className="text-gray-700 mb-4">Brief summary of the news article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>

                        {/* Repeat News Cards as needed */}
                        {/* Example: */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/600x400" alt="News" className="w-full h-40 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">News Title</h3>
                                <p className="text-gray-700 mb-4">Brief summary of the news article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8">Feedback and Suggestions</h2>

                    {/* Feedback Form */}
                    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                        <h3 className="text-xl font-semibold text-primary mb-4">Share Your Feedback</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">Feedback:</label>
                                <textarea id="feedback" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary" rows="4" placeholder="Enter your feedback here..."></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
                                <input type="text" id="name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
                                <input type="email" id="email" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors duration-300">Submit Feedback</button>
                        </form>
                    </div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial Cards */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                            <p className="text-gray-700 mb-4">"I absolutely love the meals served at the hostel! They're delicious and nutritious. Keep up the great work!"</p>
                            <p className="text-gray-600 font-semibold">- John Doe</p>
                        </div>

                        {/* Repeat Testimonial Cards as needed */}
                        {/* Example:
                    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                        <p className="text-gray-700 mb-4">Testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-gray-600 font-semibold">- Testimonial Author</p>
                    </div>
                    */}
                    </div>

                    {/* Response Mechanism */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-primary mb-4">Our Response to Feedback</h3>
                        <p className="text-gray-700">We greatly value your feedback and strive to address all concerns promptly. Our team is committed to improving our services based on your input. Thank you for helping us serve you better!</p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8">Events and Activities</h2>

                    {/* Event Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Individual Event Cards */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="bg-primary text-white px-4 py-2">
                                <h3 className="text-lg font-semibold">Cultural Night</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Date:</span> April 15, 2024</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Time:</span> 7:00 PM - 10:00 PM</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Location:</span> Auditorium</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Description:</span> Join us for an evening of cultural performances, music, and food!</p>
                                <button className="bg-secondary text-white px-4 py-2 rounded-md mt-4 hover:bg-opacity-80 transition-colors duration-300">Learn More</button>
                            </div>
                        </div>

                        {/* Repeat Event Cards as needed */}
                        {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="bg-primary text-white px-4 py-2">
                                <h3 className="text-lg font-semibold">Event Name</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Date:</span> Event Date</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Time:</span> Event Time</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Location:</span> Event Location</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Description:</span> Event Description</p>
                                <button className="bg-secondary text-white px-4 py-2 rounded-md mt-4 hover:bg-opacity-80 transition-colors duration-300">Learn More</button>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8">Events and Activities</h2>

                    {/* Event Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Individual Event Card */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <img src="https://via.placeholder.com/800x600" alt="Event" className="w-full h-40 sm:h-60 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Cultural Night</h3>
                                <p className="text-gray-700 mb-4">Date: August 20, 2024</p>
                                <p className="text-gray-700 mb-4">Time: 7:00 PM - 10:00 PM</p>
                                <p className="text-gray-700 mb-4">Location: Student Center</p>
                                <p className="text-gray-700 mb-4">Join us for a night of music, dance, and cultural performances from around the world!</p>
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Register</button>
                            </div>
                        </div>

                        {/* Repeat Event Cards as needed */}
                        {/* Example:
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                        <img src="https://via.placeholder.com/800x600" alt="Event" className="w-full h-40 sm:h-60 object-cover object-center" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Event Title</h3>
                            <p className="text-gray-700 mb-4">Date: Event Date</p>
                            <p className="text-gray-700 mb-4">Time: Event Time</p>
                            <p className="text-gray-700 mb-4">Location: Event Location</p>
                            <p className="text-gray-700 mb-4">Event description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Register</button>
                        </div>
                    </div>
                    */}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-100">
                <div className="wrapper mx-auto px-4">
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

                        {/* Repeat Event Cards as needed */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative overflow-hidden">
                                <img src="https://via.placeholder.com/800x600" alt="Event" className="w-full h-64 object-cover object-center" />
                                <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 font-semibold rounded-tr-lg">Upcoming</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Event Title</h3>
                                <p className="text-gray-700 mb-4">Date: Event Date</p>
                                <p className="text-gray-700 mb-4">Location: Event Location</p>
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300">Register</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Meals;