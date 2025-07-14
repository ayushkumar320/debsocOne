import axios from 'axios';

const quoteText = document.querySelector('.quote-text');

async function fetchQuote() {
  const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: {
      category: 'all',
      count: '2'
    },
    headers: {
      'x-rapidapi-key': 'c34d826a09mshe0f622c103da4cep1a9cf1jsn2d01806e2d8d',
      'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    if (quoteText && response.data && response.data.length > 0) {
      quoteText.innerHTML = response.data[0].text;
    }
  } catch (error) {
    console.error(error);
  }
}

fetchQuote();