import events from '../../utils/apiRequests/events'

const deleteEvent = async(store, id) => {
    const requestObject = {
        success: function() {
            store.dispatch('takeCurrentWeeksEvents');
        },
        error: console.log('error'),
        id
    }

    await events.delete(requestObject)
}

export default deleteEvent;