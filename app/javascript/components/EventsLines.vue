<template>
    <div class="full calendar--item solid-border" v-for="(day,index) in currentDaysOfWeek" v-bind:key="index">
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'; //mapGetters 

export default {
    computed: {
        ...mapState([
            'currentDaysOfWeek',
        ]),
    },
}
</script>

<style>

</style>