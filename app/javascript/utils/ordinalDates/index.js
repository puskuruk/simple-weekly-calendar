import getMonthName from "./getMonthName";

const ordinalDates = (date) => {
    const day = date.getDate();

    const monthIndex = date.getMonth();
    const month = getMonthName(monthIndex);

    const infections = ['th', 'st', 'nd', 'rd'];

    const dayIndex = (day > 3 && day < 21) ||
        day % 10 > 3 ?
        0 :
        day % 10;

    const dayString = day + (day > 0 ? infections[dayIndex] : '') + " " + month;

    return dayString;
}

export default ordinalDates;