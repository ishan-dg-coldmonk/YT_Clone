import axios from "axios";

const URL = 'https://youtube138.p.rapidapi.com'

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetch = async (url) => {
    const { data } = await axios.get(`${URL}/${url}`, options);
    return data;
};