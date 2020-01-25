import getAllEvents from "./getAllEvents";
import addItem from "./addItem";
import searchEvents from "./searchEvents";
import deleteEvent from "./deleteEvent";

const events = {
    index: getAllEvents,
    create: addItem,
    search: searchEvents,
    delete: deleteEvent
}

export default events;