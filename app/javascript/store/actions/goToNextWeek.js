import updateDay from "../../utils/daysObject/updateDay";

const goToNextWeek = (store) => {
    const nextWeek = updateDay(store.state.currentDate, 7);
    store.commit('updateCurrentDate', nextWeek);
    store.dispatch('updateCurrentDaysOfWeek');
    store.dispatch('takeCurrentWeeksEvents')
}

export default goToNextWeek;