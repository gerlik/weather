<template>
  <div class="current">
    <weatherData/>
  </div>
</template>

<script>
import weatherData from '@/components/weatherData.vue';

export default {
  name: "Today",
  components: {
    weatherData
  }
}
</script>

<style scoped>
.current {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>