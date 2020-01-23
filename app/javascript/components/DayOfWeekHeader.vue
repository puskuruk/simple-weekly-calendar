<template>
  <div style="display: flex; flex-direction: column; text-align: center;">
      <p>{{ date.dayString }}</p>
      <br>
      <p>{{ dateString }}</p>
  </div>
</template>

<script>
import ordinalDates from "../utils/ordinalDates";

export default {
    name: "DayOfWeekHeader",
    props: {
        date: {
            required: true
        }
    },
    computed:{
        dateString: function(){
            return ordinalDates(this.date.date)
        }
    },
}
</script>

<style>

</style>