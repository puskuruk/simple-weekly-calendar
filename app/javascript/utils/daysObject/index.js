import updateDay from "./updateDay";
import createDayObject from "./createDayObject";


const daysObject = (today) => {
    const currentDay = today.getDay()
    let dayIndex = today.getDay();
    const days = []

    for (let index = 0; index < 7; index++) {
        const day = new Date(today)
        const minus = dayIndex - currentDay;

        day = updateDay(day, minus);

        const dayObject = createDayObject(day, dayIndex)

        days[dayIndex] = dayObject

        if (dayIndex === 6) {
            dayIndex = 0;
        } else {
            dayIndex++;
        }
    }
    return days;
}

export default daysObject;