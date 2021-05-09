import axios from "axios";
export default {
    getMoviesInAllPages(name, page) {
        return axios.get("&page=" + page + "&s=" + name).then((response) => {
            return response.data;
        });
    },
    fetchSingleMovie(id) {
        return axios.get("&i=" + id).then((response) => {
            return response.data;
        });
    },
};
