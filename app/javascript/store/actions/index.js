import getAllEventsFromApi from './getAllEventsFromApi'
import addNewEvent from './addNewEvent'
import goToNextWeek from "./goToNextWeek";
import goToPreviousWeek from "./goToPreviousWeek";
import setToday from "./setToday";
import updateCurrentDaysOfWeek from "./updateCurrentDaysOfWeek";
import takeCurrentWeeksEvents from "./takeCurrentWeeksEvents";
import setError from './setError';
import setSuccess from './setSuccess';
import deleteEvent from './deleteEvent';
import setEventFormStatus from "./setEventFormStatus";
import updateNewEvent from "./updateNewEvent";
import updateEvent from "./updateEvent";
import setCurrentEventId from "./setCurrentEventId";

const actions = {
    getAllEventsFromApi,
    addNewEvent,
    goToNextWeek,
    goToPreviousWeek,
    setToday,
    updateCurrentDaysOfWeek,
    takeCurrentWeeksEvents,
    setError,
    setSuccess,
    deleteEvent,
    setEventFormStatus,
    updateNewEvent,
    updateEvent,
    setCurrentEventId
}

export default actions;