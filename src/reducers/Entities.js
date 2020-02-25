import { FETCH_ENTITIES_PENDING,FETCH_ENTITIES_SUCESS,FETCH_ENTITIES_ERROR,FETCH_ADDENTITIY_TYPES_SUCESS,FETCH_SEC_ADDENTITIY_TYPES_SUCESS}
from'../actions/entitiesitem';
const initialState = {
    pending: false,
    error: null,
    entitiyitem: [],
    
}
const entitiyitem= (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENTITIES_PENDING: {
            return {
                ...state,
                pending: true,
                error: ''
            }
        }
        case FETCH_ENTITIES_SUCESS:
            // console.log("Red",action);
            return {
                ...state,
                pending: false,
                entitiyitem: action.entitiyitem,
                error: ''
            }  
            case FETCH_SEC_ADDENTITIY_TYPES_SUCESS:
                console.log("Red",action);
                return{
                    ...state,
                    pending:false,
                    addentititisecitem:action.addentititisecitem,
                    error:''
                }  
                case FETCH_ADDENTITIY_TYPES_SUCESS:
                    console.log("green",action);
                    return{
                        ...state,
                        pending:false,
                        addentititypeitem:action.addentititypeitem,
                        error:''
                    }  

            case FETCH_ENTITIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        default:
            return state
    }
}
export default entitiyitem;

