const ajaxFormattedData = async(dataElement, model) => {
    let ajaxFormattedString = ''

    for (const [key, value] of Object.entries(dataElement)) {
        ajaxFormattedString += `${model}[${key}]=${value}&`
    }

    ajaxFormattedString = ajaxFormattedString.substring(0, ajaxFormattedString.length - 1);

    return ajaxFormattedString;
};

export default ajaxFormattedData;