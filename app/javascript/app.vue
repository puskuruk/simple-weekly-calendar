<template>
  <div id="calendar--page">
    <calendar-header />
    <div class="full" id="events--wrapper">
      <div class="solid-border"></div>
      <div class="solid-border"></div>
      <div class="solid-border"></div>
      <div class="solid-border"></div>
      <div class="solid-border"></div>
      <div class="solid-border"></div>
      <div class="solid-border"></div>
      <div style="position:absolute; z-index: 2; width: 100%;" class="seven">
        <div class="event-items full" :data-event-id="index" :style="eventItemStyle(event,index)" v-for="(event,index) in currentEvents">
          {{event.title}}
          <br>
          {{event.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'; //mapGetters 
import CalendarHeader from './components/CalendarHeader'
import EventItem from "./components/EventItem";

export default {
  components: {
    CalendarHeader,
    EventItem
  },
  computed: {
    ...mapState([
        'currentDaysOfWeek',
        'currentEvents'
    ]),
  },
  methods: {
    ...mapActions([
        'setToday',
        'takeCurrentWeeksEvents',
        'updateCurrentDaysOfWeek'
    ]),
    eventItemStyle: function (event, index) {
      return {
        backgroundColor: event.color, top: `${index*10}%`,
        gridColumnStart: (new Date(event.start).getDay()+1),
        gridColumnEnd: (new Date(event.end).getDay()+2)
      }
    }
  },
  created(){
    this.setToday();
    this.updateCurrentDaysOfWeek();
    this.takeCurrentWeeksEvents();
  }
}
</script>

<style>

body{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}


#calendar--page{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 15% 85%;
    overflow: hidden;

}

.center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.full{
  width: 100%;
  height: 100%;
}

.seven{
  display: grid;
  grid-template-columns: repeat(7,1fr);
}

#events--wrapper{
  background-color: aquamarine;
  display: grid;
  grid-template-columns: repeat(7,1fr);
  z-index: 1;
}

.solid-border{
    border-right: 1px solid black;
    border-left: 1px solid black;
}
.event-items{
    z-index: 2;
    position: relative;
    text-align: center;
}
</style>
