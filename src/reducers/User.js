import {FETCH_USERITEMDATA_PENDING, FETCH_USERITEMDATA_SUCESS,FETCH_USERITEMDATA_ERROR, FETCH_ROLE_TYPES_SUCESS, FETCH_ROLE_TYPES_PENDING, FETCH_ROLE_TYPES_ERROR,
     FETCH_ORGANIZATIONUSER_TYPES_PENDING,FETCH_ORGANIZATIONUSER_TYPES_SUCESS,FETCH_ORGANIZATIONUSER_TYPES_ERROR, DATA_USER_STATUS, FETCH_PRIMARY_LOCATION, FETCH_EDIT_USER_DATA_SUCESS, EDIT_PRIMARY_LOCATION_DATA
    } from '../actions/useritem';
const initialState = {
    pending: false,
    error: null,
    useritem: [],
    roleitem: [],
    oraganizationuseritem:[],
    userstatus:[],
    primary_loc_data: [],
    editlocationdata: [],
}
const useritem = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERITEMDATA_PENDING: {
            return {
                ...state,
                pending: true,
                error: ''
            }
        }
        case FETCH_USERITEMDATA_SUCESS:
            // console.log("reducer", action)

            return {
                ...state,
                pending: false,
                useritem: action.useritem,
                error: ''
            }
        case FETCH_USERITEMDATA_ERROR:

            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_ROLE_TYPES_PENDING:
            return {
                ...state,
                pending: true,
                error: ''
            }
        case FETCH_ROLE_TYPES_SUCESS:
            // console.log("role:::", action)
            return {
                ...state,
                pending: false,
                roleitem: action.roleitem,
                error: ''
            }
        case FETCH_ROLE_TYPES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_ORGANIZATIONUSER_TYPES_PENDING:
            return {
                ...state,
                pending: true,
                error: ''
            }
        case DATA_USER_STATUS:
            return {
                ...state,
                pending: true,
                userstatus: action.userstatus,
                error: ''
            }            
        case FETCH_ORGANIZATIONUSER_TYPES_SUCESS:
            return {
                ...state,
                pending: false,
                oraganizationuseritem:action.oraganizationuseritem,
                error: ''
            }
        case FETCH_PRIMARY_LOCATION:
            return {
                ...state,
                pending: false,
                primary_loc_data:action.primary_loc_data,
                error: ''
            }   

            case FETCH_EDIT_USER_DATA_SUCESS:
                return {
                    ...state,
                    pending: false,
                    edituseritem: action.edituseritem,
                    error: ''
                }

            case EDIT_PRIMARY_LOCATION_DATA:
                return {
                    ...state,
                    pending: false,
                    editlocationdata: action.editlocationdata,
                    error: ''
                }
                
        
        case FETCH_ORGANIZATIONUSER_TYPES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}
export default useritem;