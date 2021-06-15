<template>
  <div>
    <!-- TODO C-F unit identifier-->
    <!-- TODO icons -->
    <div v-if="this.$store.state.dataIsRecived" class="weather-data">
      <h2 class="weather-data-city">{{ weather.location.name }}</h2>
      <h2 class="weather-data-temp">{{ weather.current.temperature }}<span>°C</span></h2>
      <p class="weather-data-description">{{ weather.current.weather_descriptions[0] }}</p>
      <p class="weather-data-feelslike">Feels like: {{ weather.current.feelslike }}<span>°C</span></p>
      <p class="weather-data-uv">UV index: {{ weather.current.uv_index }}</p>
      <p class="weather-data-wind">Wind direction: {{ weather.current.wind_dir }}</p>
      <p class="weather-data-hum">Humidity: {{ weather.current.humidity }}</p>
    </div>
    <div v-else class="weather-data">
      <!-- TODO loading icon -->
      <p>Unable to load data</p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    weather() {
      return this.$store.state.weather
    }
  },
  created() {
    this.$store.dispatch("updateWeather");
  }
}
</script>

<style scoped>
h2 {
  margin: 40px 0 0;
}

</style>
