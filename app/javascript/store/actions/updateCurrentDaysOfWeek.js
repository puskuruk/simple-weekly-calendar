import daysObject from "../../utils/daysObject";

const updateCurrentDaysOfWeek = (store) => {
    const daysOfWeek = daysObject(store.state.currentDate);
    store.commit('setCurrentDaysOfWeek', daysOfWeek);
}

export default updateCurrentDaysOfWeek;