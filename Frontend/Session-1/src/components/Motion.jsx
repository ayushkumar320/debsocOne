import React, { useState, useEffect } from "react";
import { motion } from "../data/motion.js";

const getRandomMotions = (count = 1) => {
    const shuffled = [...motion].sort(() => 0.5 - Math.random());
    const numberOfItemsToSelect = Math.floor(Math.random() * count) + 1;
    return shuffled.slice(0, Math.min(numberOfItemsToSelect, motion.length));
};

function Motion() {
    const [motions, setMotions] = useState([]);
    
    useEffect(() => {
        setMotions(getRandomMotions());
    }, []);

    return (
        <div className="pt-6 pb-6 px-6 font-inter">
            <div className="bg-white bg-opacity-5 rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 w-full max-w-screen-xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-white mb-10">
                    Random Motion Exercises
                </h1>

                {motions.length > 0 ? (
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        {motions.map((m, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-full md:w-[90%] max-w-5xl text-white"
                            >
                                <h2 className="text-2xl font-bold mb-2">{m.type}</h2>
                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                                    {m.motion}
                                </h3>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {m.InfoSlide}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-300 text-lg">Loading random motions...</p>
                )}

                <p className="text-center text-gray-400 text-sm mt-8">
                    Refresh the page to see new random Motions!
                </p>
            </div>
        </div>
    );
}

export default Motion;np
