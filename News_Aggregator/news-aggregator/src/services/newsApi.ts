import axios from "axios";

const fetchAllNews = async (category: string) => {
  try {
    // Make a request to your Node server endpoint
    // Assuming your server is running on localhost:3001
    const response = await axios.get(`http://localhost:3001/api/news`, {
      params: { q: "", category: category },
    });
    return response.data; // The data received from your Node server
  } catch (error) {
    console.error("Error fetching all news", error);
    throw error;
  }
};

const fetchNewsByQuery = async (query: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/news`, {
      params: { q: query, category: "" },
    });
    return response.data; // The data received from your Node server
  } catch (error) {
    console.error("Error fetching news from query", error);
    throw error;
  }
};

export { fetchNewsByQuery, fetchAllNews };
