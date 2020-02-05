export const FETCH_LOCATIONITEM_PENDING = 'FETCH_LOCATIONITEM_PENDING';
export const FETCH_LOCATIONITEM_SUCCESS = 'FETCH_LOCATIONITEM_SUCCESS';
export const FETCH_LOCATIONITEM_ERROR = 'FETCH_LOCATIONITEM_ERROR';
// orgnization
export const FETCH_ORGANIZATIONDATA_PENDING = 'FETCH_ORGANIZATIONDATA_PENDING';
export const FETCH_ORGANIZATIONDATA_SUCCESS = 'FETCH_ORGANIZATIONDATA_SUCCESS';
export const FETCH_ORGANIZATIONDATA_ERROR = 'FETCH_ORGANIZATIONDATA_ERROR';
// location types
export const FETCH_LOCATIONTYPE_PENDING = 'FETCH_LOCATIONTYPE_PENDING';
export const FETCH_LOCATIONTYPE_SUCCESS = 'FETCH_LOCATIONTYPE_SUCCESS';
export const FETCH_LOCATIONTYPE_ERROR = 'FETCH_LOCATIONTYPE_ERROR';
// entity types
export const FETCH_ENTITYTYPE_PENDING = 'FETCH_ENTITYTYPE_PENDING';
export const FETCH_ENTITYTYPE_SUCCESS = 'FETCH_ENTITYTYPE_SUCCESS';
export const FETCH_ENTITYTYPE_ERROR = 'FETCH_ENTITYTYPE_ERROR';
// property type 
export const FETCH_PROPERTYTYPE_PENDING = 'FETCH_PROPERTYTYPE_PENDING';
export const FETCH_PROPERTYTYPE_SUCCESS = 'FETCH_PROPERTYTYPE_SUCCESS';
export const FETCH_PROPERTYTYPE_ERROR = 'FETCH_PROPERTYTYPE_ERROR';
// property 
export const FETCH_PROPERTY_PENDING = 'FETCH_PROPERTY_PENDING';
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS';
export const FETCH_PROPERTY_ERROR = 'FETCH_PROPERTY_ERROR';
// days interval
export const FETCH_DAYSINTERVAL_PENDING = 'FETCH_DAYSINTERVAL_PENDING';
export const FETCH_DAYSINTERVAL_SUCCESS = 'FETCH_DAYSINTERVAL_SUCCESS';
export const FETCH_DAYSINTERVAL_ERROR = 'FETCH_DAYSINTERVAL_ERROR';
// days interval
export const EDIT_LOCATION_PENDING = 'EDIT_LOCATION_PENDING';
export const EDIT_LOCATION_SUCCESS = 'EDIT_LOCATION_SUCCESS';
export const EDIT_LOCATION_ERROR = 'EDIT_LOCATION_ERROR';
// update data
export const UPDATE_LOCATION__DATA_SUCCESS = 'UPDATE_LOCATION__DATA_SUCCESS';
export const DELETE_LOCATION__DATA_SUCCESS = 'DELETE_LOCATION__DATA_SUCCESS';

export const DATA_POST_SUCCESS = 'DATA_POST_SUCCESS';

// locations
export function fetch_locationitem_pending() {
    return {
        type: FETCH_LOCATIONITEM_PENDING
    }
}

export function data_post_success(msg) {
    return {
        type: DATA_POST_SUCCESS,
        addedlocationmessage: msg
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

// organization
export function fetch_organizationdata_pending() {
    return {
        type: FETCH_ORGANIZATIONDATA_PENDING
    }
}

export function fetch_organizationdata_success(orgnizationdata) {
    return {
        type: FETCH_ORGANIZATIONDATA_SUCCESS,
        orgnizationdata:orgnizationdata
    }
}

export function fetch_organizationdata_error(error) {
    return {
        type: FETCH_ORGANIZATIONDATA_ERROR,
        error:error
    }
}

//location types
export function fetch_location_types_pending(orgnizationdata) {
    return {
        type: FETCH_LOCATIONTYPE_PENDING,
    }
}
export function fetch_location_types_success(location_types) {
    return {
        type: FETCH_LOCATIONTYPE_SUCCESS,
        locationtypes:location_types
    }
}



// ENTITY TYPES 
export function fetch_entity_types_pending() {
    return {
        type: FETCH_ENTITYTYPE_PENDING,
    }
}
export function fetch_entity_types_success(entity_types) {
    return {
        type: FETCH_ENTITYTYPE_SUCCESS,
        entitytype:entity_types
    }
}



// property type
export function fetch_property_types_pending() {
    return {
        type: FETCH_PROPERTYTYPE_PENDING,
    }
}

export function fetch_property_types_success(property_types) {
    return {
        type: FETCH_PROPERTYTYPE_SUCCESS,
        propertytype:property_types
    }
}

// property
export function fetch_property_pending() {
    return {
        type: FETCH_PROPERTY_PENDING,
    }
}

export function fetch_property_success(property) {
    return {
        type: FETCH_PROPERTY_SUCCESS,
        property:property
    }
}

// DAYS INTERVAL
export function fetch_day_intervals_pending() {
    return {
        type: FETCH_DAYSINTERVAL_PENDING,
    }
}
export function fetch_day_intervals_success(days_interval) {
    return {
        type: FETCH_DAYSINTERVAL_SUCCESS,
        daysinterval:days_interval
    }
}

// edit location
export function edit_location_data_pending() {
    return {
        type: EDIT_LOCATION_PENDING,
    }
}
export function edit_location_data_success(editdata) {
    return {
        type: EDIT_LOCATION_SUCCESS,
        editdata: editdata
    }
}

export function update_locationitem_success(updateddata) {
    return {
        type: UPDATE_LOCATION__DATA_SUCCESS,
        updateddata: updateddata
    }
}
export function delete_location_data_success() {
    return {
        type: DELETE_LOCATION__DATA_SUCCESS,
    }
}




















