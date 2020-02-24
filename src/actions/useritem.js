export const FETCH_USERITEMDATA_ERROR = 'FETCH_USERITEMDATA_ERROR';
export const FETCH_USERITEMDATA_SUCESS = 'FETCH_USERITEMDATA_SUCESS';
export const FETCH_USERITEMDATA_PENDING = 'FETCH_USERITEMDATA_PENDING';
export const DATA_POST_SUCCESS = 'DATA_POST_SUCCESS';
export const FETCH_ROLE_TYPES_SUCESS = 'FETCH_ROLE_TYPES_SUCESS';
export const FETCH_ROLE_TYPES_PENDING = 'FETCH_ROLE_TYPES_PENDING';
export const FETCH_ROLE_TYPES_ERROR = 'FETCH_ROLE_TYPES_ERROR';
export const FETCH_ORGANIZATIONUSER_TYPES_SUCESS = 'FETCH_ORGANIZATIONUSER_TYPES_SUCESS';
export const FETCH_ORGANIZATIONUSER_TYPES_PENDING = 'FETCH_ORGANIZATIONUSER_TYPES_PENDING';
export const FETCH_ORGANIZATIONUSER_TYPES_ERROR='FETCH_ORGANIZATIONUSER_TYPES_ERROR';
export const DATA_USER_STATUS='DATA_USER_STATUS';
export const FETCH_PRIMARY_LOCATION='FETCH_PRIMARY_LOCATION';
export const FETCH_EDIT_USER_DATA_SUCESS='FETCH_EDIT_USER_DATA_SUCESS';
export const EDIT_PRIMARY_LOCATION_DATA='EDIT_PRIMARY_LOCATION_DATA';

export function fetch_useritemdata_pending() {
    return {
        type: FETCH_USERITEMDATA_PENDING
    }
}
export function fetch_useritemdata_sucess(useritem_data) {
    return {
        type: FETCH_USERITEMDATA_SUCESS,
        useritem: useritem_data
    }
}
export function fetch_useritemdata_error(error) {
    return {
        type: FETCH_USERITEMDATA_ERROR,
        error: error
    }
}
export function data_post_status(status, msg, page) {
    return {
        type: DATA_POST_SUCCESS,
        notificationMsg: msg,
        status: status,
        page: page,
    }
}
export function fetch_role_types_pending() {
    return {
        type: FETCH_ROLE_TYPES_PENDING
    }
}
export function fetch_role_types_success(roleitem_data) {
    return {
        type: FETCH_ROLE_TYPES_SUCESS,
        roleitem: roleitem_data,
    }
}
export function fetch_role_types_error(error) {
    return {
        type: FETCH_ROLE_TYPES_ERROR,
        error: error
    }
}
export function fetch_organizationuser_types_pending() {
    return {
        type: FETCH_ORGANIZATIONUSER_TYPES_PENDING
    }
}
export function fetch_organizationuser_types_success(oraganizationuseritem_data) {
    return {
        type: FETCH_ORGANIZATIONUSER_TYPES_SUCESS,
        oraganizationuseritem: oraganizationuseritem_data
    }
}
export function primary_location(primary_loc_data) {
    return {
        type: FETCH_PRIMARY_LOCATION,
        primary_loc_data: primary_loc_data
    }
}

export function data_user_status(userstatus) {
    return {
        type: DATA_USER_STATUS,
        userstatus: userstatus
    }
}

export function edit_primary_location_data(editlocationdata){
    return{
       type:EDIT_PRIMARY_LOCATION_DATA,
       editlocationdata:editlocationdata
    }
}

export function Fetch_edit_user_data_success(edituserdata){
    return{
       type:FETCH_EDIT_USER_DATA_SUCESS,
       edituseritem:edituserdata
    }

}

export function fetch_organizationuser_types_error(error) {
    return {
        type: FETCH_ORGANIZATIONUSER_TYPES_ERROR,
        error: error
    }
}
