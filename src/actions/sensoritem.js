export const FETCH_SENSORITM_DATA = 'FETCH_SENSORITM_DATA';
export const FETCH_IOTDEVISENSOR_DATA = 'FETCH_IOTDEVISENSOR_DATA';
export const FETCH_LOCASENSOR_DATA = 'FETCH_LOCASENSOR_DATA';
export const FETCH_MANUFACTURE_DATA = 'FETCH_MANUFACTURE_DATA';
export const FETCH_SENSORTYPE_DATA = 'FETCH_SENSORTYPE_DATA';
export const FETCH_PARAMETER_DATA = 'FETCH_PARAMETER_DATA';

export function fetch_sensoritem_data(sensoritem_data) {
    return {
        type: FETCH_SENSORITM_DATA,
        sensoritem: sensoritem_data
    }
}

export function fetch_iotdevicesensor_data(iotdesen_data) {
    return {
        type: FETCH_IOTDEVISENSOR_DATA,
        iotdesenitem: iotdesen_data
    }
}

export function fetch_locationsensor_data(locasen_data) {
    return {
        type: FETCH_LOCASENSOR_DATA,
        locasensitem: locasen_data
    }
}

export function fetch_manufacturers_data(manufacturedata) {
    return {
        type: FETCH_MANUFACTURE_DATA,
        manufacturedata: manufacturedata
    }
}

export function fetch_sensortype_data(sensortypedata) {
    return {
        type: FETCH_SENSORTYPE_DATA,
        sensortypedata: sensortypedata
    }
}

export function fetch_parameter_data(parameterdata) {
    return {
        type: FETCH_PARAMETER_DATA,
        parameterdata: parameterdata
    }
}



