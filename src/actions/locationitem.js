export const FETCH_LOCATIONITEM_PENDING = 'FETCH_LOCATIONITEM_PENDING';
export const FETCH_LOCATIONITEM_SUCCESS = 'FETCH_LOCATIONITEM_SUCCESS';
export const FETCH_LOCATIONITEM_ERROR = 'FETCH_LOCATIONITEM_ERROR';

export function fetch_locationitem_pending() {
    return {
        type: FETCH_LOCATIONITEM_PENDING
    }
}

export function fetch_locationitem_success(locationitem_data) {
    return {
        type: FETCH_LOCATIONITEM_SUCCESS,
        locationitem:locationitem_data
    }
}

export function fetch_locationitem_error(error) {
    return {
        type: FETCH_LOCATIONITEM_ERROR,
        error:error
    }
}





