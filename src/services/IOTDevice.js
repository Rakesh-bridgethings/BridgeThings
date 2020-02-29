import { data_post_status } from '../actions/locationitem';
import axios from 'axios';
import { fetch_device_item_data, fetch_location_data, fetch_application_data, fetch_devicetype_data, fetch_deviceprofile_data, edit_device_data } from '../actions/IOTdeviceitem';
import { SERVER_URL, HEADER } from '../config/config';
import statusMessage from './status';

let locations = {"locations":[{"location":"BIPL-PDI-MBG"},{"location":"CMASH"},{"location":"CMNLD"},{"location":"CMVBG"}]};

export function fetchIOTDeviceData() {
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);
       try {
          axios.post(`${SERVER_URL}iot_devices/list`, locations, { headers: HEADER }).then(async (res) => {
             statusMessage(dispatch, "loading", false);
             resolve(
                dispatch(fetch_device_item_data(res.data.rows))
             );
          });
       } catch (error) {
          reject(error);
       }
    }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchlocationdata(entityid) {
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);
       try {
          axios.get(`${SERVER_URL}location/list?entity=${entityid}`, { headers: HEADER }).then(async (res) => {
             statusMessage(dispatch, "loading", false);
             resolve(
                dispatch(fetch_location_data(res.data.list))
             );
          });
          axios.get(`${SERVER_URL}entity/id?id=${entityid}`, { headers: HEADER }).then(async (res) => {
             statusMessage(dispatch, "loading", false);
             resolve(
                dispatch(fetch_application_data(res.data.applications))
             );
          });          
       } catch (error) {
          reject(error);
       }
    }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchdevicetypedata() {
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);
       try {
          axios.get(`${SERVER_URL}device_types`, { headers: HEADER }).then(async (res) => {
             statusMessage(dispatch, "loading", false);
             resolve(
                dispatch(fetch_devicetype_data(res.data))
             );
          });        
       } catch (error) {
          reject(error);
       }
    }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchdeviceprofiledata() {
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);
       try {
          axios.get(`${SERVER_URL}device_profile_types`, { headers: HEADER }).then(async (res) => {
             statusMessage(dispatch, "loading", false);
             resolve(
                dispatch(fetch_deviceprofile_data(res.data))
             );
          });        
       } catch (error) {
          reject(error);
       }
    }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function add_iotdevices(value) {
    return dispatch => new Promise(async (resolve, reject) => {
        await statusMessage(dispatch, 'loading', true);
        try {
           axios.put(`${SERVER_URL}iot_devices`, value, { headers: HEADER }).then(async (res) => {
              statusMessage(dispatch, "loading", false);
              var status = '';
              if (res.status === 200 && res.data !== '') {
                 status = 'success';
              }
              if (res.status === 200 && res.data === '') {
                 status = 'error';
              }
              resolve(
                 dispatch(data_post_status(status, res.data, 'adddevice'))
              );
           }).catch(error => {
              statusMessage(dispatch, 'error', error);
              reject(error);
              resolve(
                 dispatch(data_post_status('error', error, 'adddevice'))
              );
           });
           axios.post(`${SERVER_URL}iot_devices/list`, locations, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_device_item_data(res.data.rows))
            );
         });
        } catch (error) {
           reject(error);
        }
     }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetcheditdata(editid) {
    let editdata = [];
    return dispatch => new Promise(async (resolve, reject) => {
       await statusMessage(dispatch, 'loading', true);
       var entityId = '';
       try {
          axios.post(`${SERVER_URL}iot_devices/list`, locations, { headers: HEADER }).then(async (res) => {
             statusMessage(dispatch, "loading", false);
             res.data.rows.map((item, index) => {
                if (item.id === editid) {
                   editdata.push(item);
                   entityId = item.entityId;
                }               
             })
             resolve(
                dispatch(edit_device_data(editdata[0]))
             );
          });
       } catch (error) {
          reject(error);
       }
    }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}










