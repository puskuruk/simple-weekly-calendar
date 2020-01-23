const updateDay = (day, days) => {
    return new Date(day.setDate(day.getDate() + days))
}

export default updateDay;