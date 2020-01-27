import { FETCH_LOCATIONITEM_PENDING, FETCH_LOCATIONITEM_SUCCESS, FETCH_LOCATIONITEM_ERROR } from '../actions/locationitem';

const initialState = {
    pending: false,
    locationitem: [],
    error: null
}

const locationitem = (state = initialState, action) => {
    // console.log("action::", action);
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
