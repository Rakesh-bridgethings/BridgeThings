import { FETCH_LOCATIONITEM_SUCCESS, FETCH_ORGANIZATIONDATA_SUCCESS, FETCH_LOCATIONTYPE_SUCCESS, FETCH_ENTITYTYPE_SUCCESS, FETCH_PROPERTYTYPE_SUCCESS, FETCH_PROPERTY_SUCCESS,  FETCH_DAYSINTERVAL_SUCCESS, EDIT_LOCATION_SUCCESS, UPDATE_LOCATION__DATA_SUCCESS, DELETE_LOCATION__DATA_SUCCESS, FETCH_REGION_SUCCESS } from '../actions/locationitem';

const initialState = {
    locationitem: [],
    orgnizationdata: [],
    locationtypes: [],
    entitytype: [],
    propertytype: [],
    daysinterval: [],
    property: [],
    editdata: [],
    regiondata: [],
}

const locationitem = (state = initialState, action) => {
    switch (action.type) {      
        case FETCH_LOCATIONITEM_SUCCESS:
            return {
                ...state,                
                locationitem: action.locationitem,                
            }
        case FETCH_ORGANIZATIONDATA_SUCCESS:
            return {
                ...state,                
                orgnizationdata: action.orgnizationdata,                
            }
        case FETCH_LOCATIONTYPE_SUCCESS:
            return {
                ...state,                
                locationtypes: action.locationtypes,                
            } 
        case FETCH_ENTITYTYPE_SUCCESS:
            return {
                ...state,                
                entitytype: action.entitytype,                
            }
        case FETCH_PROPERTYTYPE_SUCCESS:
            return {
                ...state,                
                propertytype: action.propertytype,                
            }
        case FETCH_PROPERTY_SUCCESS:
            return {
                ...state,                
                property: action.property,                
            }      
        case FETCH_DAYSINTERVAL_SUCCESS:
            return {
                ...state,                
                daysinterval: action.daysinterval,                
            }
        case EDIT_LOCATION_SUCCESS:
            return {
                ...state,                
                editdata: action.editdata,                
            }   
        case UPDATE_LOCATION__DATA_SUCCESS:
            return {
                ...state,                
                locationitem: action.updateddata,                
            } 
        case FETCH_REGION_SUCCESS:
            return {
                ...state,                
                regiondata: action.regiondata,                
            }              
        case DELETE_LOCATION__DATA_SUCCESS:
            return {
                ...state,                
            }
        default:
            return state
    }
}

export default locationitem;
