<template>
    <div class="event-items full" :data-event-id="index" :style="{backgroundColor: event.color, top: `${index*10}%`, gridColumnStart: (new Date(event.start).getDay()+2),gridColumnEnd: (new Date(event.end).getDay()+2) }" v-for="(event,index) in currentEvents">
        {{event.title}}
        <br>
        {{event.description}}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "EventItem",
    computed: {
        ...mapState([
            'currentEvents'
        ]),
    }
}
</script>

<style>
.event-items{
    z-index: 2;
    position: relative;
    text-align: center;
}
</style>