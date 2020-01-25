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
}

export default actions;