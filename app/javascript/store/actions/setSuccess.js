const setSuccess = ({ commit }, success) => {
    commit('setSuccess', success);
    setTimeout(() => {
        commit('setSuccess', !success);
    }, 1000);
}

export default setSuccess;