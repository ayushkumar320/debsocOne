import React, { useEffect, useState } from "react";
import axios from "axios";
import quoteImage from "../assets/quote-image.jpg";

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

function Quote() {
  const [quote, setQuote] = useState("Loading...");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      const options = {
        method: "GET",
        url: "https://famous-quotes4.p.rapidapi.com/random",
        params: { category: "all", count: "1" },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data && response.data.length > 0) {
          setQuote(response.data[0].text);
        } else {
          setQuote("No quotes available.");
        }
      } catch (err) {
        console.error(err);
        setError(true);
        setQuote("Failed to fetch quote.");
      }
    }

    fetchQuote();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md rounded-3xl border border-orange-500 p-10 grid grid-cols-1 md:grid-cols-2 gap-6 transition-shadow duration-500 delay-100 ease-in-out hover:shadow-[0_0_30px_#f97316]">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-orange-500 text-2xl font-bold mb-6">QUOTE OF THE DAY</h2>
          <blockquote className="text-white text-xl italic leading-relaxed border-l-4 border-orange-500 pl-4">
            {quote}
          </blockquote>
          {error && (
            <p className="text-red-400 mt-4 text-sm">
              Check your API key or network connection.
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <img
            src={quoteImage}
            alt="Quote visual"
            className="w-full h-64 object-cover rounded-xl border border-orange-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Quote;
