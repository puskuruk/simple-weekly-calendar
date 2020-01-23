const setToday = ({ commit }) => {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    commit('setCurrentDate', today);
}

export default setToday;