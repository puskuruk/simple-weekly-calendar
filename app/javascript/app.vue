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
        <div class="event-items full" @mouseout="hideDeleteButton" @mouseover="showDeleteButton" :data-event-id="event.id" :style="eventItemStyle(event,index)" :key="event.id" v-for="(event,index) in currentEvents">
          <div style="width: 100%;" @click="updateEvent">
            {{event.title}}
            <br>
            {{event.description}}
          </div>
          <div @click="deleteEventItem" :id="'delete-button-'+event.id" style="display: none; transition: 0.4s all ease-in-out; border-radius: 20%;" class="delete-wrapper">
            X
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'; //mapGetters 
import CalendarHeader from './components/CalendarHeader'

export default {
  components: {
    CalendarHeader,
  },
  computed: {
    ...mapState([
        'currentDaysOfWeek',
        'currentEvents',
        'eventFormStatus',
        'currentEventId'
    ]),
  },
  methods: {
    ...mapActions([
        'setToday',
        'takeCurrentWeeksEvents',
        'updateCurrentDaysOfWeek',
        'deleteEvent',
        'updateNewEvent',
        'setEventFormStatus',
        'setCurrentEventId'
    ]),
    eventItemStyle: function (event, index) {
      return {
        backgroundColor: event.color, top: `${index*10}%`,
        gridColumnStart: (new Date(event.start).getDay()+1),
        gridColumnEnd: (new Date(event.end).getDay()+2)
      }
    },
    getDataEventId: function(event){
      return event.target.parentNode.getAttribute('data-event-id');
    },
    deleteEventItem: function(event){
      const eventId = this.currentEventId;
      this.deleteEvent(eventId);
    },
    changeDeleteButton: function(event, action){
      const eventId = this.getDataEventId(event);
      const deleteButton = document.getElementById('delete-button-'+eventId);
      if (deleteButton !== null){
        switch (action) {
          case 'hide':
            deleteButton.style.display = 'none';
            break;

          case 'show':
            this.setCurrentEventId(eventId);
            deleteButton.style.display = 'block';
            break;

          default:
            break;
        }
      }
    },
    showDeleteButton: function(event){
      this.changeDeleteButton(event, 'show')
    },
    hideDeleteButton: function(event){
      this.changeDeleteButton(event, 'hide')
    },
    updateEvent: function(){
      event.preventDefault();
      const eventId = this.getDataEventId(event);
      this.updateNewEvent(eventId);
      const newEventFormModalState = {
              type: "update",
              text:  "Update",
              successMessage: 'Event is Successfully Updated',
              opened: !this.eventFormStatus.opened
            }
      this.setEventFormStatus(newEventFormModalState);
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

.delete-wrapper{
  width: 2ch;
  height: 2ch;
  background-color:red;
  margin: auto 0;
  text-align: center;
  color:white;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
}

#calendar--page{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 42% 58%;
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
    display: flex;
    user-select: none;
    cursor: pointer;
}
</style>
