import React, { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        async function fetchQuote() {
            const options = {
                method: 'GET',
                url: 'https://famous-quotes4.p.rapidapi.com/random',
                params: { category: 'all', count: '1' },
                headers: {
                    'x-rapidapi-key': 'c34d826a09mshe0f622c103da4cep1a9cf1jsn2d01806e2d8d',
                    'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                if (response.data && response.data.length > 0) {
                    setQuote(response.data[0].text);
                }
            } catch (error) {
                setQuote("Failed to fetch quote.");
            }
        }
        fetchQuote();
    }, []);

    return (
        <div>
            <blockquote>
                <p className="quote-text">{quote}</p>
            </blockquote>
        </div>
    );
}

export default Quote;