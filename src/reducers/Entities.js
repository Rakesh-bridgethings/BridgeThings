import {
    FETCH_ENTITIES_SUCESS,
    FETCH_ADDENTITIY_TYPES_SUCESS, FETCH_SEC_ADDENTITIY_TYPES_SUCESS, FETCH_EDIT_ENTITTY_DATA_SUCESS,
    FETCH_LORA_APPTYPE_SUCESS, FETCH_LORANETAPPUP_SUCESS
}
    from '../actions/entitiesitem';
const initialState = {
    entitiyitem: [],
    editentititisecitem: [],
    loraapptypeitem: [],
}

const entitiyitem = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENTITIES_SUCESS:
            return {
                ...state,
                entitiyitem: action.entitiyitem,
            }
        case FETCH_SEC_ADDENTITIY_TYPES_SUCESS:
            return {
                ...state,
                addentititisecitem: action.addentititisecitem,
            }
        case FETCH_ADDENTITIY_TYPES_SUCESS:
            return {
                ...state,
                addentititypeitem: action.addentititypeitem,
            }
        case FETCH_EDIT_ENTITTY_DATA_SUCESS:
            return {
                ...state,
                editentititisecitem: action.editentititisecitem,
            }
        case FETCH_LORA_APPTYPE_SUCESS:

            return {
                ...state,
                loraapptypeitem: action.loraapptypeitem,
            }
        case FETCH_LORANETAPPUP_SUCESS:

            return {
                ...state,
                upadateappnetdata: action.upadateappnetdata,
            }
        default:
            return state
    }
}
export default entitiyitem;

