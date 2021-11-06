import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YPFf0Ov_Id9JXitcCwOOaWCfG_khHBbgfgDZoKkoTtEJiJS5oIInz9biWgVPts3Z0qVSza_xfsiJ_-FTbbkmHa5TbaKeeZzcWLyV18e5WQ2hRe4HPS6ZfX6xPrxbYXYx'
    },
});
