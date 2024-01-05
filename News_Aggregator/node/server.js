const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const API_KEY = "a57be76ec5a644e6863fff5953e3dbdd";
//const BASE_URL = 'https://newsapi.org/v2/';

app.get('/api/news', async (req, res) => {
    try {
        const category = req.query.category;
        const query = req.query.q;
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: { 
                category: "technology",
                q: query,
                language: "en",
                apiKey: API_KEY, // Set in your server's environment
                // other parameters
            },
        });
        res.json(response.data.articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
