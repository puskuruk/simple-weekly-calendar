const ROOT_API_ENDPOINT = 'api';
const API_VERSION = '/v1';
const ROOT_ENDPOINT = ROOT_API_ENDPOINT + API_VERSION;

const ROOT_ENDPOINTS = {
    events: ROOT_ENDPOINT + '/events',
    search: ROOT_ENDPOINT + '/events/search',
    delete: (id) => `${ROOT_ENDPOINT}/events/${id}`
}

const ROUTES = {
    events: {
        baseUrl: ROOT_ENDPOINTS.events,
        actions: {
            index: {
                type: "GET",
                url: ROOT_ENDPOINTS.events,
            },
            create: {
                type: "POST",
                url: ROOT_ENDPOINTS.events
            },
            search_events_in_week: {
                type: "POST",
                url: ROOT_ENDPOINTS.search
            },
            delete: {
                type: "DELETE",
                url: ROOT_ENDPOINTS.delete
            }
        }
    }
}

export default ROUTES;