import updateDay from "../../utils/daysObject/updateDay";

const goToPreviousWeek = (store) => {
    const previousWeek = updateDay(store.state.currentDate, -7);
    store.commit('updateCurrentDate', previousWeek);
    store.dispatch('updateCurrentDaysOfWeek');
    store.dispatch('takeCurrentWeeksEvents');
}

export default goToPreviousWeek;