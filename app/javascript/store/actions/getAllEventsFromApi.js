import events from '../../utils/apiRequests/events'
import sortByProperty from "../../utils/sortByProperty";

const getAllEventsFromApi = async({ commit }) => {
    const resolvedFunctions = {
        success: function(response) {
            commit('setEvents', sortByProperty(response, "start"))
        },
        error: 'genericError'
    }

    await events.index(resolvedFunctions)
}

export default getAllEventsFromApi;