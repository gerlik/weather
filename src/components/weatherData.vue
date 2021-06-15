<template>
  <div class="data-box">
    <!-- TODO C-F unit identifier-->
    <!-- TODO icons -->
    <!-- TODO fix Firefox view-->
    <div v-if="this.$store.state.dataIsRecived" class="weather-data">
      <h1 class="weather-data-city">{{ weather.location.name }}</h1>
      <h1 class="weather-data-temp">{{ weather.current.temperature }}<span>°C</span></h1>
      <img :src="require(`../assets/sunny_weather_icon.svg`)"/>
      <!--      <img :src="getImage()" alt="Weather icon">-->
      <p class="weather-data-description">{{ weather.current.weather_descriptions[0] }}</p>
      <p class="weather-data-feelslike">Feels like: {{ weather.current.feelslike }}<span>°C</span></p>
      <p class="weather-data-uv">UV index: {{ weather.current.uv_index }}</p>
      <p class="weather-data-wind">Wind direction: {{ weather.current.wind_dir }}</p>
      <p class="weather-data-hum">Humidity: {{ weather.current.humidity }}<span>%</span></p>
    </div>
    <div v-else class="weather-data">
      <p>Unable to load actual data</p>
      <!-- TODO loading icon -->
      <!-- TODO Remove sample data -->
      <h1 class="weather-data-city">Tallinn</h1>
      <h1 class="weather-data-temp">15<span>°C</span></h1>
      <img :src="require(`../assets/sunny_weather_icon.svg`)"/>
      <p class="weather-data-description">Sunny, yesterday my life was filled with rain</p>
      <p class="weather-data-feelslike">Feels like: 15<span>°C</span></p>
      <p class="weather-data-uv">UV index: 4</p>
      <p class="weather-data-wind">Wind direction: W</p>
      <p class="weather-data-hum">Humidity: 69%</p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    weather() {
      return this.$store.state.weather
    },
    // getImage() {
    // TODO image to be selected according to the weather
    // }
    created() {
      this.$store.dispatch("updateWeather");
    }
  }

}
</script>

<style scoped>
h1 {
  font-size: 40px;
}

h2 {
  margin: 40px 0 0;
}

.data-box {
  justify-content: left;
}
</style>
