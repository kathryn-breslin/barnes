import axios from "axios";

export default {
    heros: function () {
        return axios.get("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    }
};