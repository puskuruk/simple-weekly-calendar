import events from '../../utils/apiRequests/events'

const takeCurrentWeeksEvents = async(store) => {
    const currentDate = store.state.currentDate;

    const requestObject = {
        success: function(response) {
            store.commit('setCurrentEvents', response["events"]);
        },
        error: 'error',
        date: currentDate
    }

    await events.search(requestObject)
}

export default takeCurrentWeeksEvents;