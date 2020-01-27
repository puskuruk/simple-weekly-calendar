import Rails from '@rails/ujs'
import ajaxFormattedData from "./ajaxFormattedData";

const fetchInternalApi = async(requestObject) => {
    const ajaxFormattedString = requestObject.ajaxFormattedString ? requestObject.ajaxFormattedString : null;

    Rails.ajax({
        url: requestObject.url,
        type: requestObject.type,
        data: ajaxFormattedString,
        success: function(responseFromAjax) {
            typeof requestObject.success === "function" ? requestObject.success(responseFromAjax) : console.log('succesfully fetched');
        },
        error: function(responseFromAjax) {
            typeof requestObject.error === "function" ? requestObject.error(responseFromAjax) : console.warn(responseFromAjax)
        }
    })
}

export default fetchInternalApi;