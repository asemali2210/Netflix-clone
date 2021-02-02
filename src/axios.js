import axios  from "axios";

const instance = axios.create({
    /* prepended base url */
    baseURL: `https://api.themoviedb.org/3`
});

export default instance;