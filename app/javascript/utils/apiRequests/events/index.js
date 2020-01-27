import getAllEvents from "./getAllEvents";
import addItem from "./addItem";
import searchEvents from "./searchEvents";
import deleteEvent from "./deleteEvent";
import updateEvent from "./updateEvent";

const events = {
    index: getAllEvents,
    create: addItem,
    search: searchEvents,
    delete: deleteEvent,
    update: updateEvent
}

export default events;