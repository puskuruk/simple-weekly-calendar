import ajaxFormattedData from "../ajaxFormattedData";
import ROUTES from "../../constants/routes";
import fetchInternalApi from "../../apiRequests/fetchInternalApi";

const updateEvent = async(dataObject) => {
    const ajaxFormattedString = await ajaxFormattedData(dataObject.values, "event")

    console.log(dataObject)
    const requestObject = {
        url: ROUTES.events.actions.update.url(dataObject.id),
        type: ROUTES.events.actions.update.type,
        ajaxFormattedString,
        success: dataObject.success,
        error: dataObject.error,
    };

    await fetchInternalApi(requestObject);
}

export default updateEvent;