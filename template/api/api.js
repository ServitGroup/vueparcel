const axios = window.axios;
conset url = 'http://localhost:3000';
export default {
    login(playload) {
        console.log("playload-->", playload);
        return axios.get(url + "/users?email=" + playload.email);
    }
};