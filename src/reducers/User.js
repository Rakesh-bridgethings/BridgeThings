import {FETCH_USERITEMDATA_PENDING, FETCH_USERITEMDATA_SUCESS,FETCH_USERITEMDATA_ERROR, FETCH_ROLE_TYPES_SUCESS, FETCH_ROLE_TYPES_PENDING, FETCH_ROLE_TYPES_ERROR,
     FETCH_ORGANIZATIONUSER_TYPES_PENDING,FETCH_ORGANIZATIONUSER_TYPES_SUCESS,FETCH_ORGANIZATIONUSER_TYPES_ERROR
    } from '../actions/useritem';
const initialState = {
    pending: false,
    error: null,
    useritem: [],
    roleitem: [],
    oraganizationuseritem:[]
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
        case FETCH_ORGANIZATIONUSER_TYPES_SUCESS:
            return {
                ...state,
                pending: false,
                oraganizationuseritem:action.oraganizationuseritem,
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