import Rails from '@rails/ujs'
import ajaxFormattedData from "./ajaxFormattedData";

const fetchInternalApi = async(requestObject) => {
    const ajaxFormattedString = requestObject.ajaxFormattedString ? requestObject.ajaxFormattedString : null;

    Rails.ajax({
        url: requestObject.url,
        type: requestObject.type,
        data: ajaxFormattedString,
        success: function(responseFromAjax) {
            requestObject.success(responseFromAjax);
        },
        error: function(responseFromAjax) {
            requestObject.error(responseFromAjax);
        }
    })
}

export default fetchInternalApi;