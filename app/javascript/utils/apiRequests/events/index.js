import getAllEvents from "./getAllEvents";
import addItem from "./addItem";
import searchEvents from "./searchEvents";

const events = {
    index: getAllEvents,
    create: addItem,
    search: searchEvents
}

export default events;