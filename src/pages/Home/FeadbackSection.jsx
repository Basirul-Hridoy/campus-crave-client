import feadbackBg from "../../../public/images/feadback-image-1.jpg"
const FeadbackSection = () => {
    return (
        <section style={{
            backgroundImage: `url(${feadbackBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} className="bg-cover bg-blend-lighten bg-primary">
            <div className="py-20 bg-primary bg-opacity-75 my-24">
                <div className=" wrapper px-4 md:px-0 flex justify-end">
                    {/* Feedback Form */}
                    <div className=" w-[600px] bg-slate-50 rounded-lg shadow-md md:p-8 p-3 py-8">
                        <h3 className="md:text-6xl text-3xl font-extrabold text-primary mb-4 font-sans">Share Your any Feedback <span className="text-secondary">On here</span></h3>
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">Feedback:</label>
                                <textarea id="feedback" className="w-full border rounded-md px-4 py-2 focus:outline-none resize-none" rows="4" placeholder="Enter your feedback here..."></textarea>
                            </div>
                            <div >
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
                                <input type="text" id="name" className="w-full border rounded-md px-4 py-3 focus:outline-none" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
                                <input type="email" id="email" className="w-full border rounded-md px-4 py-3 focus:outline-none" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="bg-secondary text-white px-6 w-full py-3 rounded-md hover:bg-[#FA8F45] transition-colors duration-300">Submit Feedback</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeadbackSection;