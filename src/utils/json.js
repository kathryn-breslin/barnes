import axios from "axios";

//GET to the json endpoint
export default {
    heros: function () {
        return axios.get("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    }
};