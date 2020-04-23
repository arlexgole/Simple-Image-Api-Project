import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wDnijtXSkP_TFp8hkIWhmT4C-L6KmGTtirM0uA0Wiv4'
    }
});

