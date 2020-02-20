
import {fetch_useritemdata_sucess,fetch_role_types_success,fetch_organizationuser_types_success} from '../actions/useritem';
import axios from 'axios';
import { SERVER_URL, HEADER } from '../config/config';
import statusMessage from './status';
 let locations= {"locations":[{location: "BIPL-PDI-MBG"}, {location: "CMASH"}, {location: "CMNLD"}, {location: "CMVBG"}]};
export function fetchuseritemdata() { 
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);       
       try {
        axios.post(`${SERVER_URL}user/list`,locations, { headers: HEADER })
             .then(async (res) => {
               //   console.log("getdata::",res);
                statusMessage(dispatch, "loading", false);
                resolve(
                    dispatch(fetch_useritemdata_sucess(res.data.rows))            
                );
             });
       } catch (error) {
          reject(error);
       }
    }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
 }
 export function fetchroleitemdata(){
    return dispatch=>new Promise(async(resolve,reject)=>{
       await statusMessage(dispatch,'loading',true);
       try{
          axios.get(`${SERVER_URL}roles`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_role_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
export function fechorganizationitemdata(){
   return dispatch=>new Promise(async(resolve,reject)=>{
      await statusMessage(dispatch,"loading",false);
      try{
         axios.get(`${SERVER_URL}entity_types`,{ headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_organizationuser_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
      
