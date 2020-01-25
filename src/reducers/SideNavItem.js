import { FETCH_SIDENAVITEM_PENDING, FETCH_SIDENAVITEM_SUCCESS, FETCH_TOPUSERITEM_SUCCESS, FETCH_SIDENAVITEM_ERROR } from '../actions/sidenavitem';

const initialState = {
    pending: false,
    sidenavitem: [],
    topUseritem: [],
    error: null
}

const sidenavitem = (state = initialState, action) => {
    // console.log("action::", action);
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
                sidenavitem: action.sidenavitem,
                error: ''
            }
        case FETCH_TOPUSERITEM_SUCCESS:
            return {
                ...state,
                pending: false,
                topUseritem: action.topUseritem,
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
