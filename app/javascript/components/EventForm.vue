<template>
<!-- Used https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2 for not spending time for modal -->
    <div class="full">
        <!-- Trigger/Open The Modal -->
        <button class="h-full" @click="changeModalStatus">
            Add New Event
        </button>

        <!-- The Modal -->
        <div id="myModal" v-show="eventFormStatus.opened" class="modal">
        
          <!-- Modal content -->
          <div class="modal-content">
            <div class="modal-header" style="text-align: center;">
              <span @click="changeModalStatus" class="close">&times;</span>
              <h2>{{eventFormStatus.type}} Event</h2>
            </div>
            <div id="modal-body">
                <form v-show="!this.success" action="/" method="POST" class="full" id="event-form" v-on:submit="submitForm">
                    <div id="date-inputs">
                        <div>
                          <p v-show="startError" style="color: red;">Please Select a Start Day</p>
                          <input v-model="newEvent.start"  id="start-date" name="start" type="date" />
                        </div>
                        <div>
                          <p v-show="endError" style="color: red;">Please Select an End Day</p>
                          <input v-model="newEvent.end"  id="end-date" name="end" type="date" />
                        </div>
                    </div>
                    <input v-model="newEvent.title" type="text" placeholder="title" name="title" />
                    <input v-model="newEvent.description" type="text" placeholder="description" name="description" />
                  <input type="submit" value="Submit" />
                </form>
            </div>
              <h1 v-show="this.success" style="margin: auto auto; text-align:center;">New Event Created!</h1>
            <div class="modal-footer">
              <h3></h3>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "AddNewEvent",
    data: function () {
      return {
        newEvent: {
          "start": null,
          "end": null,
          "title": null,
          "description": null
        },
      }
    },
    computed: {
        ...mapState([
          'error',
          'success',
          'eventFormStatus'
        ]),
        startError: function(){
          return this.error.event ? this.error.event.start: false
        },
        endError: function(){
          return this.error.event ? this.error.event.end : false

        }
    },
    methods: {
        submitForm:  function(event){
            event.preventDefault();
            
            const requestObject = {
              values: this.newEvent,
            }
            this.addNewEvent(requestObject);
        },
        ...mapActions([
            'addNewEvent',
            'setEventFormStatus'
        ]),
        changeModalStatus: function(){
            const newState = this.eventFormStatus;
            newState.type = "Add New"
            newState.opened = !this.eventFormStatus.opened
            this.setEventFormStatus(newState)
        }
    },
}
</script>

<style scoped>
/* The Modal (background) */
.full{
    width: 100%;
    height: 100%;
}

.h-full{
  height: 100%;
}

.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
#event-form{
    display: flex;
    flex-direction: column;
}
#date-inputs{
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
}

#event-form input{
    width: 82%;
    margin: auto;
    margin-top: 5%;
    text-align: center;

}

#date-inputs div{
  width: 45%;
  height: 100%;
}

#date-inputs div input{
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>