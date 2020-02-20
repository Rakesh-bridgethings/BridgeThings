import { FETCH_LOCATIONITEM_PENDING, FETCH_LOCATIONITEM_SUCCESS, FETCH_LOCATIONITEM_ERROR, FETCH_ORGANIZATIONDATA_SUCCESS, FETCH_LOCATIONTYPE_SUCCESS, FETCH_ENTITYTYPE_SUCCESS, FETCH_PROPERTYTYPE_SUCCESS, FETCH_PROPERTY_SUCCESS,  FETCH_DAYSINTERVAL_SUCCESS, EDIT_LOCATION_SUCCESS, UPDATE_LOCATION__DATA_SUCCESS, DELETE_LOCATION__DATA_SUCCESS, FETCH_REGION_SUCCESS } from '../actions/locationitem';

const initialState = {
    pending: false,
    locationitem: [],
    orgnizationdata: [],
    locationtypes: [],
    entitytype: [],
    propertytype: [],
    daysinterval: [],
    property: [],
    error: null,
    editdata: [],
    regiondata: [],
}

const locationitem = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONITEM_PENDING: {
            return {
                ...state,
                pending: true,
                error: ''
            }
        }
        case FETCH_LOCATIONITEM_SUCCESS:
            return {
                ...state,
                pending: false,
                locationitem: action.locationitem,
                error: ''
            }
        case FETCH_ORGANIZATIONDATA_SUCCESS:
            return {
                ...state,
                pending: false,
                orgnizationdata: action.orgnizationdata,
                error: ''
            }
        case FETCH_LOCATIONTYPE_SUCCESS:
            return {
                ...state,
                pending: false,
                locationtypes: action.locationtypes,
                error: ''
            } 
        case FETCH_ENTITYTYPE_SUCCESS:
            return {
                ...state,
                pending: false,
                entitytype: action.entitytype,
                error: ''
            }
        case FETCH_PROPERTYTYPE_SUCCESS:
            return {
                ...state,
                pending: false,
                propertytype: action.propertytype,
                error: ''
            }
        case FETCH_PROPERTY_SUCCESS:
            return {
                ...state,
                pending: false,
                property: action.property,
                error: ''
            }      
        case FETCH_DAYSINTERVAL_SUCCESS:
            return {
                ...state,
                pending: false,
                daysinterval: action.daysinterval,
                error: ''
            }
        case EDIT_LOCATION_SUCCESS:
            return {
                ...state,
                pending: false,
                editdata: action.editdata,
                error: ''
            }   
        case UPDATE_LOCATION__DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                locationitem: action.updateddata,
                error: ''
            } 
        case FETCH_REGION_SUCCESS:
            return {
                ...state,
                pending: false,
                regiondata: action.regiondata,
                error: ''
            }              
        case DELETE_LOCATION__DATA_SUCCESS:
            return {
                ...state,
                pending: false,
            }                                    
        case FETCH_LOCATIONITEM_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}

export default locationitem;
