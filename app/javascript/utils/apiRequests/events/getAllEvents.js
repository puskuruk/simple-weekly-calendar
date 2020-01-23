import ROUTES from "../../constants/routes";
import fetchInternalApi from "../../apiRequests/fetchInternalApi";

const getAllEvents = async(resolvedFunctions) => {
    const route = ROUTES.events.actions.index
    const requestObject = {};

    requestObject["url"] = route.url;
    requestObject["type"] = route.type;
    requestObject["success"] = resolvedFunctions.success

    await fetchInternalApi(requestObject)
}

export default getAllEvents;