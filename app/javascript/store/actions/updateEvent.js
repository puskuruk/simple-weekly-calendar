import events from '../../utils/apiRequests/events'

const updateEvent = async(store, requestObject) => {
    requestObject["success"] = function(suc) {
        store.dispatch('setError', false)
        store.dispatch('setSuccess', true)
        store.dispatch('takeCurrentWeeksEvents');
    }

    requestObject["error"] = function(error) {
        store.dispatch('setSuccess', false);
        store.dispatch('setError', error);
    }

    await events.update(requestObject);
}

export default updateEvent;