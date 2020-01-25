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
    newEvent: {
        "start": null,
        "end": null,
        "title": null,
        "description": null
    },
    eventFormStatus: {
        type: null,
        opened: false
    }
};

export default state;