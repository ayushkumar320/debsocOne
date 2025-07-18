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
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4 font-inter">
            <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 md:p-8 lg:p-10 max-w-4xl w-full">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    Random Motion Exercises
                </h1>
                {motions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {motions.map((m, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-2xl font-bold text-gray-700 mb-2">{m.type}</h2>
                                <h3 className="text-xl font-semibold text-indigo-600 mb-3">{m.motion}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{m.InfoSlide}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">Loading random motions...</p>
                )}
                <p className="text-center text-gray-500 text-sm mt-8">Refresh the page to see new random exercises!</p>
            </div>
        </div>
    );
}

export default Motion;