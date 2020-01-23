import ajaxFormattedData from "../ajaxFormattedData";
import ROUTES from "../../constants/routes";
import fetchInternalApi from "../../apiRequests/fetchInternalApi";

const addItem = async(dataObject) => {
    const ajaxFormattedString = await ajaxFormattedData(dataObject.values, "event")

    const requestObject = {
        url: ROUTES.events.actions.create.url,
        type: ROUTES.events.actions.create.type,
        ajaxFormattedString,
        success: dataObject.success,
        error: dataObject.error
    };

    await fetchInternalApi(requestObject);
}

export default addItem;