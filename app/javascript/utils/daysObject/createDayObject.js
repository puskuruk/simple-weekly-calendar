import daysArray from "../constants/daysArray";

const createDayObject = (dayOfWeek, dayIndex) => {

    const day = {
        dayString: daysArray[dayIndex],
        date: dayOfWeek
    }

    return day;
}

export default createDayObject;