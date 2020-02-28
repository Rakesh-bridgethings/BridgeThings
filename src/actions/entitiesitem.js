export const FETCH_ENTITIES_SUCESS='FETCH_ENTITIES_SUCESS';
export const FETCH_ADDENTITIY_TYPES_SUCESS='FETCH_ADDENTITIY_TYPES_SUCESS';
export const FETCH_SEC_ADDENTITIY_TYPES_SUCESS='FETCH_SEC_ADDENTITIY_TYPES_SUCESS';
export const FETCH_EDIT_ENTITTY_DATA_SUCESS='FETCH_EDIT_ENTITTY_DATA_SUCESS';
export const FETCH_LORA_APPTYPE_SUCESS='FETCH_LORA_APPTYPE_SUCESS';
export const FETCH_LORANETAPPUP_SUCESS='FETCH_LORANETAPPUP_SUCESS';

export function fetch_entities_types_sucess(entitiyitem_data) {
 
    return {
        type: FETCH_ENTITIES_SUCESS,
        entitiyitem: entitiyitem_data
    }
}

export function fetch_addentitiy_types_success(addentititype_data){
   
    return{
        type:FETCH_ADDENTITIY_TYPES_SUCESS,
        addentititypeitem:addentititype_data
    }
}
export function fetch_sector_addentitiy_types_success(addentititisecitem_data){
  
    return{
        type:FETCH_SEC_ADDENTITIY_TYPES_SUCESS,
        addentititisecitem:addentititisecitem_data
    }
}
export function Fetch_edit_entitty_data_success(entitiyuserdata){
    
    return{
      type:FETCH_EDIT_ENTITTY_DATA_SUCESS,
      editentititisecitem:entitiyuserdata
    }
}
export function fetch_lora_apptype_success(loraapptypedata){
   
    return{
        type:FETCH_LORA_APPTYPE_SUCESS,
        loraapptypeitem:loraapptypedata
    }
}
export function fetch_loranetappupadate_success(upadateappnetdata){
    return{
        type:FETCH_LORANETAPPUP_SUCESS,
        upadateappnetdata:upadateappnetdata
        
    }
}

