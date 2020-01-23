import events from '../../utils/apiRequests/events'

const addNewEvent = async(store, requestObject) => {
    requestObject["success"] = function(suc) {
        store.dispatch('setError', false)
        store.dispatch('setSuccess', true)
    }

    requestObject["error"] = function(error){
        store.dispatch('setSuccess', false)
        store.dispatch('setError', error)
    }

    await events.create(requestObject)
}

export default addNewEvent;