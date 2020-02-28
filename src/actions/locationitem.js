export const FETCH_LOCATIONITEM_SUCCESS = 'FETCH_LOCATIONITEM_SUCCESS';
// orgnization
export const FETCH_ORGANIZATIONDATA_SUCCESS = 'FETCH_ORGANIZATIONDATA_SUCCESS';
// location types
export const FETCH_LOCATIONTYPE_SUCCESS = 'FETCH_LOCATIONTYPE_SUCCESS';
// entity types
export const FETCH_ENTITYTYPE_SUCCESS = 'FETCH_ENTITYTYPE_SUCCESS';
// property type 
export const FETCH_PROPERTYTYPE_SUCCESS = 'FETCH_PROPERTYTYPE_SUCCESS';
// property 
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS';
// days interval
export const FETCH_DAYSINTERVAL_SUCCESS = 'FETCH_DAYSINTERVAL_SUCCESS';
// days interval
export const EDIT_LOCATION_SUCCESS = 'EDIT_LOCATION_SUCCESS';
// update data
export const UPDATE_LOCATION__DATA_SUCCESS = 'UPDATE_LOCATION__DATA_SUCCESS';
export const DELETE_LOCATION__DATA_SUCCESS = 'DELETE_LOCATION__DATA_SUCCESS';

export const DATA_POST_SUCCESS = 'DATA_POST_SUCCESS';
export const FETCH_REGION_SUCCESS = 'FETCH_REGION_SUCCESS';
// locations

export function data_post_status(status, msg, page) {
    return {
        type: DATA_POST_SUCCESS,
        notificationMsg: msg,
        status: status,
        page: page,
    }
}

export function fetch_locationitem_success(locationitem_data) {
    return {
        type: FETCH_LOCATIONITEM_SUCCESS,
        locationitem: locationitem_data
    }
}

export function fetch_region_success(region_data) {
    return {
        type: FETCH_REGION_SUCCESS,
        regiondata: region_data
    }
}

// organization

export function fetch_organizationdata_success(orgnizationdata) {
    return {
        type: FETCH_ORGANIZATIONDATA_SUCCESS,
        orgnizationdata: orgnizationdata
    }
}

//location types

export function fetch_location_types_success(location_types) {
    return {
        type: FETCH_LOCATIONTYPE_SUCCESS,
        locationtypes: location_types
    }
}



// ENTITY TYPES 
export function fetch_entity_types_success(entity_types) {
    return {
        type: FETCH_ENTITYTYPE_SUCCESS,
        entitytype: entity_types
    }
}



// property type

export function fetch_property_types_success(property_types) {
    return {
        type: FETCH_PROPERTYTYPE_SUCCESS,
        propertytype: property_types
    }
}

// property

export function fetch_property_success(property) {
    return {
        type: FETCH_PROPERTY_SUCCESS,
        property: property
    }
}

// DAYS INTERVAL
export function fetch_day_intervals_success(days_interval) {
    return {
        type: FETCH_DAYSINTERVAL_SUCCESS,
        daysinterval: days_interval
    }
}

// edit location

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




















