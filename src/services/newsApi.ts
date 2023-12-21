import axios from 'axios';

export const fetchNews = async (category: String) => {
    try {
        // Make a request to your Node server endpoint
        // Assuming your server is running on localhost:3001
        const response = await axios.get(`http://localhost:3001/api/news`, {
            params: { sources: category }
        });
        return response.data; // The data received from your Node server
    } catch (error) {
        console.error("Error fetching news", error);
        throw error;
    }
};