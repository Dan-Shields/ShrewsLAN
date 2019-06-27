<template>
  <h2 class="seats-left">Seats left: {{ seatsLeft }}/40</h2>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      seatsLeft: '-'
    };
  },
  mounted () {
    let totalSeats = 40;

    axios
      .get('/api/countsignups')
      .then(response => {
        if (response.status === 200 && response.data >= 15) {
          this.seatsLeft = totalSeats - response.data;
        } else {
          this.seatsLeft = 25;
        }
      });
  }
};
</script>

<style lang="scss" scoped>

</style>
