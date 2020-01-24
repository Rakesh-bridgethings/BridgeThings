export const FETCH_SIDENAVITEM_PENDING = 'FETCH_SIDENAVITEM_PENDING';
export const FETCH_SIDENAVITEM_SUCCESS = 'FETCH_SIDENAVITEM_SUCCESS';
export const FETCH_TOPUSERITEM_SUCCESS = 'FETCH_TOPUSERITEM_SUCCESS';
export const FETCH_SIDENAVITEM_ERROR = 'FETCH_SIDENAVITEM_ERROR';

export function fetch_sidenavitem_pending() {
    return {
        type: FETCH_SIDENAVITEM_PENDING
    }
}

export function fetch_sidenavitem_success(sidenavitem_data) {
    return {
        type: FETCH_SIDENAVITEM_SUCCESS,
        sidenavitem:sidenavitem_data
    }
}

export function fetch_topUseritem_success(topUseritem_data) {
    return {
        type: FETCH_TOPUSERITEM_SUCCESS,
        topUseritem:topUseritem_data
    }
}

export function fetch_sidenavitem_error(error) {
    return {
        type: FETCH_SIDENAVITEM_ERROR,
        error:error
    }
}
