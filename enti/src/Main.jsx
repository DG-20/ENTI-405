function Main() {
    return (<div className="max-w-5xl mx-auto mt-12 px-4 text-center">
        {/* Intro Paragraph */}
        <div className="mb-10">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">Welcome to Our Vision for 17th Avenue</h2>
            <p className="text-lg text-gray-700">
                This webpage showcases a series of strategic and community-driven recommendations designed to revitalize 17th Avenue SW in Calgary.
                Our ideas are based on local survey data and aim to increase engagement, improve amenities, and create a vibrant experience
                for visitors, entrepreneurs, and residents alike.
            </p>
        </div>

        {/* Section Title */}
        <h3 className="text-2xl font-semibold text-pink-600 mb-6">Our Recommendations</h3>

        {/* Recommendation Buttons
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
                <motion.button
                    key={index}
                    onClick={() => openModal(rec)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-600 hover:bg-pink-700 text-white py-6 px-8 rounded-2xl shadow-xl text-lg font-semibold transition duration-300"
                >
                    {rec.title}
                </motion.button>
            ))}
        </div> */}
    </div>)
};

export default Main;