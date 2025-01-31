import axios from "axios";

const fetchAllNews = async (category: string) => {
  try {
    // Make a request to your Node server endpoint
    // Assuming your server is running on localhost:3001
    const response = await axios.get(`https://news-server-j9fd.onrender.com/api/news`, {
      params: { category: category },
    });
    return response.data; // The data received from your Node server
  } catch (error) {
    console.error("Error fetching all news", error);
    throw error;
  }
};

const fetchNewsByQuery = async (query: string) => {
  try {
    const response = await axios.get(`https://news-server-j9fd.onrender.com/api/news/search`, {
      params: { q: query },
    });
    return response.data; // The data received from your Node server
  } catch (error) {
    console.error("Error fetching news from query", error);
    throw error;
  }
};

export { fetchNewsByQuery, fetchAllNews };
