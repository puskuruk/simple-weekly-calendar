import ajaxFormattedData from "../ajaxFormattedData";
import ROUTES from "../../constants/routes";
import fetchInternalApi from "../../apiRequests/fetchInternalApi";

const searchEvents = async(dataObject) => {
    const ajaxFormattedString = `event[date]=${new Date(dataObject.date)}`
    const requestObject = {
        url: ROUTES.events.actions.search_events_in_week.url,
        type: ROUTES.events.actions.search_events_in_week.type,
        ajaxFormattedString,
        success: dataObject.success,
        error: dataObject.error
    };

    await fetchInternalApi(requestObject);
}

export default searchEvents;