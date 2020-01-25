import ROUTES from "../../constants/routes";
import fetchInternalApi from "../../apiRequests/fetchInternalApi";
import { mapState, mapActions } from 'vuex'; //mapGetters 

const deleteEvent = async(dataObject) => {
    const requestObject = {
        url: ROUTES.events.actions.delete.url(dataObject.id),
        type: ROUTES.events.actions.delete.type,
        success: dataObject.success,
        error: dataObject.error
    };

    await fetchInternalApi(requestObject);
}

export default deleteEvent;