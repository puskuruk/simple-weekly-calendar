const updateNewEvent = (store, id) => {
    const currentEvents = store.state.currentEvents;
    const event = currentEvents.find(event => event.id === Number(id))

    const newEvent = {
        "start": new Date(event["start"]).toISOString().substr(0, 10),
        "end": new Date(event["end"]).toISOString().substr(0, 10),
        "title": event["title"],
        "description": event["description"]
    }

    store.commit('setNewEvent', newEvent);
}

export default updateNewEvent;