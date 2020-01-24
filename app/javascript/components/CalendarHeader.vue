<template>
    <div id="calendar--page--header--wrapper">
        <div id="calendar--page--header">
            <div class="center">
                <button style="z-index: 3;" @click="goToPreviousWeek">Previous Week</button>
            </div>
            <div style="text-align: center;">
                <div class="full" style="display: flex; flex-direction: column;">
                    <h1>Calendar App</h1>
                    <h1 id="full-year">{{ year }}</h1>
                    <add-new-event style="z-index: 3;" />
                </div>
            </div>
            <div class="center">
                <button style="z-index: 3;" @click="goToNextWeek">Next Week</button>
            </div>
        </div>
        <div id="days--of--week-wrapper" class="full">
            <div id="days--of--week">
                <div class="full calendar--item" v-for="(day, index) in currentDaysOfWeek" :key="day+index">
                    <div class="solid-border calendar--header">
                        <day-of-week-header class="day-of-week-header--item" v-bind:date="day"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AddNewEvent from "./AddNewEvent";
import DayOfWeekHeader from "./DayOfWeekHeader";

export default {
    name: "CalendarHeader",
    components: {
        AddNewEvent,
        DayOfWeekHeader
    },
    computed: {
        ...mapState([
            'currentDaysOfWeek'
        ]),
        year(){
            return this.currentDaysOfWeek[0] !== undefined ? this.currentDaysOfWeek[0].date.getFullYear() : new Date().getFullYear()
        }
    },
    methods: {
        ...mapActions([
            'goToPreviousWeek',
            'goToNextWeek',
        ]),
    },
}
</script>

<style>
#calendar--page--header{
    background-color: chartreuse;
    display: grid;
    grid-template-columns: 25% 50% 25%;
}

#calendar--page--header--wrapper{
    display: grid;
    grid-template-rows: 60% 40%;
    background-color: aquamarine;
}

#days--of--week-wrapper{
    background-color: black;
}

#days--of--week{
    display: flex;
    justify-content: space-between;
    background-color: green;
}
#full-year{
    line-height: 0;
    padding-top: 2%;
}
</style>