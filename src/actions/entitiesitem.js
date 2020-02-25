export const FETCH_ENTITIES_SUCESS='FETCH_ENTITIES_SUCESS';
export const FETCH_ENTITIES_PENDING='FETCH_ENTITIES_PENDING';
export const FETCH_ADDENTITIY_TYPES_SUCESS='FETCH_ADDENTITIY_TYPES_SUCESS';
export const FETCH_ENTITIES_ERROR='FETCH_ENTITIES_ERROR';
export const FETCH_SEC_ADDENTITIY_TYPES_SUCESS='FETCH_SEC_ADDENTITIY_TYPES_SUCESS';
export function fetch_entities_types_pending(){
    return{
        type:FETCH_ENTITIES_PENDING,

    }
}
export function fetch_entities_types_sucess(entitiyitem_data) {
    // console.log("action",entitiyitem_data);
    return {
        type: FETCH_ENTITIES_SUCESS,
        entitiyitem: entitiyitem_data
    }
}

export function fetch_addentitiy_types_success(addentititype_data){
    // console.log("action1",addentititype_data);
    return{
        type:FETCH_ADDENTITIY_TYPES_SUCESS,
        addentititypeitem:addentititype_data
    }
}
export function fetch_sector_addentitiy_types_success(addentititisecitem_data){
    // console.log("action2",addentititisecitem_data);
    return{
        type:FETCH_SEC_ADDENTITIY_TYPES_SUCESS,
        addentititisecitem:addentititisecitem_data
    }
}
export function fetch_entities_types_error(error){
    return{
        type:FETCH_ENTITIES_ERROR,
        error: error
    }
}