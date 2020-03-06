export const FETCH_SIDENAVITEM_PENDING = 'FETCH_SIDENAVITEM_PENDING';
export const FETCH_SIDENAVITEM_SUCCESS = 'FETCH_SIDENAVITEM_SUCCESS';
export const FETCH_TOPUSERITEM_SUCCESS = 'FETCH_TOPUSERITEM_SUCCESS';
export const FETCH_SIDENAVITEM_ERROR = 'FETCH_SIDENAVITEM_ERROR';
export function fetch_sidenavitem_pending() {
    return {
        type: FETCH_SIDENAVITEM_PENDING
    }
}
export function fetch_sidenavitem_success(sidenavdata) {
    return {
        type: FETCH_SIDENAVITEM_SUCCESS,
        sidenavdata:sidenavdata
    }
}
export function fetch_topUseritem_success(topuserdata) {
    return {
        type: FETCH_TOPUSERITEM_SUCCESS,
        topuserdata:topuserdata
    }
}
export function fetch_sidenavitem_error(error) {
    return {
        type: FETCH_SIDENAVITEM_ERROR,
        error:error
    }
}
