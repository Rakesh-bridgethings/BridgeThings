import { FETCH_SIDENAVITEM_PENDING, FETCH_SIDENAVITEM_SUCCESS, FETCH_TOPUSERITEM_SUCCESS, FETCH_SIDENAVITEM_ERROR } from '../actions/sidenavitem';

const initialState = {
    pending: false,
    sidenavdata: [],
    topuserdata: [],
    error: null
}

const sidenavitem = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SIDENAVITEM_PENDING: {
            return {
                ...state,
                pending: true,
                error: ''
            }
        }
        case FETCH_SIDENAVITEM_SUCCESS:
            return {
                ...state,
                pending: false,
                sidenavdata: action.sidenavdata,
                error: ''
            }
        case FETCH_TOPUSERITEM_SUCCESS:
            return {
                ...state,
                pending: false,
                topuserdata: action.topuserdata,
                error: ''
            }        
        case FETCH_SIDENAVITEM_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}

export default sidenavitem;
