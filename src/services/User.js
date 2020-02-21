
import {fetch_useritemdata_sucess,fetch_role_types_success,fetch_organizationuser_types_success, primary_location} from '../actions/useritem';
import {data_post_status} from '../actions/locationitem';
import axios from 'axios';
import { SERVER_URL, HEADER } from '../config/config';
import statusMessage from './status';

let locations = {"locations":[{location: "BIPL-PDI-MBG"}, {location: "CMASH"}, {location: "CMNLD"}, {location: "CMVBG"}]};

export function fetchuseritemdata() { 
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);       
       try {
        axios.post(`${SERVER_URL}user/list`,locations, { headers: HEADER })
             .then(async (res) => {
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
         axios.get(`${SERVER_URL}entities`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_organizationuser_types_success(res.data.rows))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchUpdateUserStatus(val){
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.put(`${SERVER_URL}users`, val, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            var status = '';
            if (res.status === 200 && res.data !== '') {
               status = 'success';
            }
            if (res.status === 200 && res.data === '') {
               status = 'error';
            }
            axios.post(`${SERVER_URL}user/list`,locations, { headers: HEADER })
            .then(async (res) => {
               statusMessage(dispatch, "loading", false);
               resolve(
                   dispatch(fetch_useritemdata_sucess(res.data.rows))            
               );
            });
            resolve(
               dispatch(data_post_status(status, res.data, 'userstatus'))
            );
         }).catch(error => {
            statusMessage(dispatch, 'error', error);
            reject(error);
            resolve(
               dispatch(data_post_status('error', error, 'userstatus'))
            );
         });         
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchPrimaryLocation(entityid) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);      
      try {
         axios.get(`${SERVER_URL}user_locations?entity=${entityid}`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            console.log("res.data::", res);
            resolve(
               dispatch(primary_location(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function addUser(val) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.post(`${SERVER_URL}users`, val, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            var status = '';
            if (res.status === 200 && res.data !== '') {
               status = 'success';
            }
            if (res.status === 200 && res.data === '') {
               status = 'error';
            }
            resolve(
               dispatch(data_post_status(status, res.data, 'adduser'))
            );
            fetchuseritemdata();
         }).catch(error => {
            statusMessage(dispatch, 'error', error);
            reject(error);
            resolve(
               dispatch(data_post_status('error', error, 'adduser'))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}



