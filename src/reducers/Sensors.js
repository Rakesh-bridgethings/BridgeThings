import { FETCH_SENSORITM_DATA, FETCH_LOCASENSOR_DATA, FETCH_IOTDEVISENSOR_DATA, FETCH_MANUFACTURE_DATA, FETCH_SENSORTYPE_DATA, FETCH_PARAMETER_DATA } from '../actions/sensoritem';
const initialState = {
    // sensoritem:[],
    // locasensitem:[],
    // iotdesenitem:[]
}

const sensoritem = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SENSORITM_DATA:
            return {
                ...state,
                sensoritem: action.sensoritem,
            }
        case FETCH_LOCASENSOR_DATA:
            return {
                ...state,
                locasensitem: action.locasensitem,
            }
        case FETCH_IOTDEVISENSOR_DATA:
            return {
                ...state,
                iotdesenitem: action.iotdesenitem,
            }
        case FETCH_MANUFACTURE_DATA:
            return {
                ...state,
                manufacturedata: action.manufacturedata
            }
        case FETCH_SENSORTYPE_DATA:
            return {
                ...state,
                sensortypedata: action.sensortypedata
            }  
        case FETCH_PARAMETER_DATA:
            return {
                ...state,
                parameterdata: action.parameterdata
            }                        
        default:
            return state
    }
}


export default sensoritem;


