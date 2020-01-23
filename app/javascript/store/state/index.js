const state = {
    events: new Array,
    currentEvents: new Array,
    currentDate: null,
    loading: false,
    currentDaysOfWeek: new Array,
    error: {
        event: {
            start: false,
            end: false,
            description: false,
            title: false
        }
    },
    success: false,
};

export default state;