const setSuccess = ({ commit }, success) => {
    commit('setSuccess', success);
    setTimeout(() => {
        commit('setSuccess', !success);
    }, 1500);
}

export default setSuccess;