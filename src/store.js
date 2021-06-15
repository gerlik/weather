import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js"; // fetch data from API

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // define data for storing
        weather: {},
        dataIsRecived: false
    },
    mutations: {
        UPDATE_WEATHER(state) {
            service
                .getWeather() // call the function from service.js
                .then(response => {
                    state.weather = response.data;
                    state.dataIsRecived = true;
                    // console.log(response);
                    // console.log(state.weather.current);
                })
                .catch(error => {
                    console.log("There was an error:", error.response);
                    state.dataIsRecived = false;
                });
        }
    },
    actions: {
        updateWeather(context) {
            context.commit("UPDATE_WEATHER");
        }
    }
});